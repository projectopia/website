'use server';

import { signOut } from '@/auth';

/**
 * Logs out the user by calling the signOut function from the auth module.
 *
 * @returns {Promise<void>} Returns a promise that resolves when the user is successfully signed out.
 */
export const logout = async (): Promise<void> => {
  await signOut();
};
