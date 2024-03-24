'use server';

import * as z from 'zod';

import { db } from '@/lib/db';
import { SubscribeSchema } from '@/schemas/subscribe';
import { checkExisitingSubscribedEmail } from '@/lib/utils';
import {
  ServerActionResponse,
  ServerActionErrorResponse,
  ServerActionSuccessResponse,
} from '@/schemas/server-action-response';

/**
 * Subscribes an email to the newsletter.
 *
 * @param {z.infer<typeof SubscribeSchema>} values The values to subscribe, validated against the SubscribeSchema.
 * @returns {Promise<ServerActionResponse>} A promise that resolves to an object containing either an error message or the subscription success.
 */
export const subscribeNewsletter = async (values: z.infer<typeof SubscribeSchema>): Promise<ServerActionResponse> => {
  // Validate fields using the defined zod SubscribeSchema
  const validatedFields = SubscribeSchema.safeParse(values);

  if (!validatedFields.success) {
    return new ServerActionErrorResponse('Check your input and try again!');
  }

  // Extract email from validated fields
  const { email } = validatedFields.data;

  const existingSubscribedEmail = await checkExisitingSubscribedEmail(email);

  if (existingSubscribedEmail) {
    return new ServerActionErrorResponse('Email has already subscribed!');
  }

  // Add email to the Newsletter collection
  try {
    await db.newsletter.create({
      data: {
        email,
      },
    });

    return new ServerActionSuccessResponse('Thank you for subscribing!');
  } catch (error) {
    return new ServerActionErrorResponse('Something went wrong, try again later');
  }
};
