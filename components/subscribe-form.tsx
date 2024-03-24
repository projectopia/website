'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';
import { useTransition } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SubscribeSchema } from '@/schemas/subscribe';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import { subscribeNewsletter } from '@/actions/subscribe-newsletter';
import { ServerActionResponse } from '@/schemas/server-action-response';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

export const SubscribeForm = () => {
  // React hook for storing pending action (i.e. Submitting a form)
  const [isPending, startTransition] = useTransition();

  // Form management variable from 'react-hook-form'
  const form = useForm<z.infer<typeof SubscribeSchema>>({
    resolver: zodResolver(SubscribeSchema),
  });

  const onSubmit = async (data: z.infer<typeof SubscribeSchema>) => {
    // Make the action pending
    startTransition(async () => {
      const response: ServerActionResponse = await subscribeNewsletter(data);

      // Render the response message due to error or success response
      if (response.type === 'error') {
        toast.error(response.message);
        return;
      }

      toast(response.message, {
        description: 'Stay tuned for exciting updates and exclusive offers.',
        action: {
          label: 'Dismiss',
          onClick: () => {},
        },
      });
    });
  };

  // Form validation error handling
  const onError = (errors: FieldErrors<z.infer<typeof SubscribeSchema>>) => {
    toast.error(errors.email?.message);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)} className="flex w-full gap-4 mt-8">
        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex-1 relative">
                  <Mail className="absolute top-1/2 -translate-y-1/2 left-5 text-purple" />
                  <Input
                    disabled={isPending}
                    className="w-full pl-14 pr-4 text-base border border-solid border-gray/40"
                    placeholder="Your email"
                    {...field}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          className="bg-purple text-white px-5 py-2 font-medium leading-6 hover:bg-purple/85 text-base"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
};
