
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export default function ContactForm() {
  const { toast } = useToast();
  const { t } = useI18n();

  const formSchema = z.object({
    name: z
      .string()
      .min(2, { message: t('contact.form.validation.name') }),
    email: z
      .string()
      .email({ message: t('contact.form.validation.email') }),
    message: z
      .string()
      .min(10, { message: t('contact.form.validation.message') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: t('contact.form.toast.title'),
      description: t('contact.form.toast.description'),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.form.name.label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.form.name.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.form.email.label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('contact.form.email.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.form.message.label')}</FormLabel>
              <FormControl>
                <Textarea placeholder={t('contact.form.message.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" size="lg">
          {t('contact.form.submit')}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}
