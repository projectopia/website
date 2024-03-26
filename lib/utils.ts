import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { db } from './db';
import { Newsletter, User } from '@prisma/client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *  The debounce function receives a callback function as a parameter
 *
 * @param fn: Callback function (for example scroll function)
 * @returns a new function that can receive a variable number of arguments
 */
export const debounce = (fn: (...params: any[]) => void) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame: number;

  return (...params: any[]) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }
    // Queue callback function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call callback function and pass any params we received
      fn(...params);
    });
  };
};

/**
 * Retrieves a user from the database based on id.
 *
 * @param {string} id - The unique identifier of the user.
 * @returns {Promise<User | null>} A Promise that resolves to the user object if found
 * in the database, or null if an error occurs.
 */
export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};

/**
 * Checks if a given email is already subscribed in the newsletter.
 *
 * @param {string} email - The email to check for subscription.
 * @returns {Promise<Newsletter | null>} A promise that resolves to a boolean indicating
 * if the email is subscribed.
 */
export const checkExisitingSubscribedEmail = async (email: string): Promise<Newsletter | null> => {
  try {
    const isExistingEmail = await db.newsletter.findUnique({ where: { email } });

    return isExistingEmail;
  } catch (error) {
    return null;
  }
};
