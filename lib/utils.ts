import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { db } from './db';

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

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch (error) {
    return null;
  }
};
