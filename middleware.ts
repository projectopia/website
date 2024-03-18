import NextAuth from 'next-auth';

import authConfig from '@/auth.config';
import { DEFAULT_NOT_SIGNIN_REDIRECT, apiAuthPrefix, publicRoutes } from '@/routes';

const { auth } = NextAuth(authConfig);

/**
 * Middleware function for authentication.
 * Handles route authorization and redirection based on the user's authentication status.
 *
 * @param {object} req - The request object.
 * @returns {void | Response} - Returns void if it doesn't need further actions, or returns
 * a redirection Response if the user is not logged in and the route is not public.
 */
export default auth((req) => {
  // Extract the nextUrl from the request
  const { nextUrl } = req;

  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  // Redirect to the default sign-in redirect URL if the user is not signed in and
  // trying to accessing private routes
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(DEFAULT_NOT_SIGNIN_REDIRECT, nextUrl));
  }

  return;
});

export const config = {
  /**
   * Routes that match any of the specified patterns will be intercepted by the middleware.
   * This allows the middleware to handle specific routes or groups of routes.
   *
   * Patterns:
   * - `/((?!.+\\.[\\w]+$|_next).*)`: Matches any route except those with file extensions
   *    or starting with `_next`.
   * - `/`: Matches the root route.
   * - `/(api|trpc)(.*)`: Matches routes starting with either "/api" or "/trpc".
   *
   * @type {string[]}
   */
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
