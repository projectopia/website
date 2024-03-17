'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { PlusCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/lib/utils';
import { generatorFormFields } from '@/lib/constants';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const formSchema = z.object({
  template: z.string({ required_error: 'Please choose a template' }),
  projectName: z.string({ required_error: 'Please input a projectname' }),
  repositoryName: z.string({ required_error: 'Please input your repository name' }),
  tagline: z.string({ required_error: 'Please input your project tagline' }),
  visibility: z.string(),
});

export const GeneratorForm = () => {
  // Form management variable from 'react-hook-form'
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // Hardcoded default values specific to generator-form component
    defaultValues: {
      visibility: 'public',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // TODO: Handle data submission later
    console.log(data);
  };

  return (
    <div className="flex-1 border border-solid border-black/25 rounded-3xl overflow-hidden">
      <div className="w-full h-full p-8">
        <h3 className="flex gap-3 text-xl leading-7 items-center font-semibold">
          <PlusCircle size={24} className="text-purple" />
          Create your own Project
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-15">
            {generatorFormFields.map(({ name, type, label, placeholder, options }, idx) => (
              <FormField
                key={idx}
                control={form.control}
                name={name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg leading-6 text-black">{label}</FormLabel>
                    {type === 'select' && (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className={cn(
                              'text-base bg-generator-form-input px-[18px] py-[14px] h-auto border-none rounded-lg text-gray mt-4',
                              field.value && 'text-black',
                            )}
                          >
                            <SelectValue placeholder={placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {options.map(({ title, value }, idx) => (
                            <SelectItem
                              key={idx}
                              className="text-base focus:bg-zinc-100 py-3 cursor-pointer"
                              value={value}
                            >
                              {title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
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
