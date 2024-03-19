import Github from 'next-auth/providers/github';

import type { NextAuthConfig } from 'next-auth';

/**
 * Configuration object for NextAuth.
 * - Configures the provider(s) for authentication.
 *
 * @type {NextAuthConfig}
 */
export default {
  providers: [
    /**
     * GitHub provider configuration.
     * - Uses the GitHub OAuth flow for authentication.
     * - Requires the 'GITHUB_CLIENT_ID' and 'GITHUB_CLIENT_SECRET' environment variables.
     * - Sets the authorization scope to include permissions for reading user details, email, and repositories.
     * - Defines a profile function to transform the user profile data returned by GitHub into the desired shape.
     */
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: 'read:user,user:email,repo' } },
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
