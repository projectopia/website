import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/**
 *  The debounce function receives our function as a parameter
 *
 * @param fn: Our function (for example scroll function)
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
    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};
