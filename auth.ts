import NextAuth from 'next-auth';

import { db } from '@/lib/db';
import authConfig from '@/auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { getUserById } from './lib/utils';

export const {
  handlers: { GET, POST },
  auth,
  signOut,
} = NextAuth({
  callbacks: {
    /** Default callback function from next-auth for preprocessing
     * session before server or client receieve it through hooks or
     * server actions.
     */
    async session({ session, token }) {
      // Assign token sub (userId) to user id in the session
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // Return session without username if the username is not initialized
      // correctly in the jwt callback function
      if (!token.username) {
        return session;
      }

      // Return new session with user id and username
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        },
      };
    },
    /** Default callback function from next-auth for preprocessing token
     * before session access the token.
     */
    async jwt({ token }) {
      if (!token.sub) return token;

      // Query the user from the database
      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      // Assign the user's username to the token
      token.username = existingUser.username;

      return token;
    },
  },
  trustHost: true,
  adapter: PrismaAdapter(db),
  // Make the sign in session lives for 6 days
  session: { strategy: 'jwt', maxAge: 518400 },
  ...authConfig,
});
