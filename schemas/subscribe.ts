import * as z from 'zod';

/**
 * A schema for validating user's subscription email
 *
 * @property {string} email - The email address.
 */
export const SubscribeSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Please input a valid email',
    }),
});
