/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = ['/', '/docs', '/contact'];

/**
 * The prefix for API authentication rotues
 * Routes that start with this prefix are used for API
 * authentication purposes
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth';

/**
 * The default redirect path when accessing protected
 * route before signing in
 * @type {string}
 */
export const DEFAULT_NOT_SIGNIN_REDIRECT: string = '/';
