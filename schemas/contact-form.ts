import * as z from 'zod';

/**
 * Schema for the contact form data. Which includes:
 *
 * @field name: string
 * @field email: string
 * @field marketingSource: string
 * @field message: string
 */
export const contactFormSchema = z.object({
  name: z.string({ required_error: 'Please tell us your name' }),
  email: z.string({ required_error: 'Please tell us your email' }).email({ message: 'Please input a correct email' }),
  marketingSource: z.string(),
  message: z.string({ required_error: 'Please express your thoughts or message to us.' }),
});

/**
 * An array of objects that store fields of contact form
 * for rendering effeciently
 *
 * @field name: string - used for rendering on Form component from shadcn/ui
 * @field type: string - type of the field (input, select, etc.)
 * @field label: string - label for the field
 * @field placeholder: string - placeholder for the field
 */
export const contactFormFields = [
  {
    name: 'name',
    type: 'input',
    label: 'Your Name',
    placeholder: 'What is your name?',
  },
  {
    name: 'email',
    type: 'input',
    label: 'Your Email',
    placeholder: 'What is your email?',
  },
  {
    name: 'marketingSource',
    type: 'input',
    label: 'How did you hear about us?',
    placeholder: 'This is important to us (optional)',
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Your Message',
    placeholder: 'Your super duper important note...',
  },
];
