'use client';

import { z } from 'zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { contactFormFields, contactFormSchema } from '@/schemas/contact-form';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';

export const ContactForm = () => {
  // Form management variable from 'react-hook-form'
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    // Hardcoded default values specific to generator-form component
    defaultValues: {
      marketingSource: '',
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    // TODO: Handle data submission later
    console.log(data);
  };

  return (
    <div className="flex-1 border border-solid border-black/25 rounded-3xl overflow-hidden">
      <div className="w-full h-full p-8">
        <h3 className="flex gap-3 text-xl leading-7 items-center font-semibold">
          <Send size={24} className="text-purple rotate-45" />
          Connect with Our Team
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-15">
            {contactFormFields.map(({ name, type, label, placeholder }, idx) => (
              <FormField
                key={idx}
                control={form.control}
                name={name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg leading-6 text-black">{label}</FormLabel>
                    {type === 'input' && (
                      <FormControl>
                        <Input
                          variant="ghost"
                          sizes="lg"
                          className="text-base mt-4"
                          placeholder={placeholder}
                          {...field}
                        />
                      </FormControl>
                    )}
                    {type === 'textarea' && (
                      <FormControl>
                        <Textarea
                          className="text-base mt-4 px-[18px] py-[14px] bg-generator-form-input border-none resize-none rounded-lg"
                          rows={10}
                          placeholder={placeholder}
                          {...field}
                        />
                      </FormControl>
                    )}
                    <FormMessage className="text-xs mt-2" />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="text-sm px-8 py-[14px] font-bold text-white leading-5 h-auto bg-purple hover:bg-purple/85 rounded-lg"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
