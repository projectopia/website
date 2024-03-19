import NextAuth, { type DefaultSession } from 'next-auth';

/**
 * Represents an extended user object from default session user
 * that includes the 'username' field.
 */
export type ExtendedUser = DefaultSession['user'] & {
  username: string;
};

/**
 * Overrides the 'Session' interface of 'next-auth' module to
 * include the 'user' field of type 'ExtendedUser'.
 */
declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
