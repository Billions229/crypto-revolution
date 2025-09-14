"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { requestAnalysisAssistance } from '@/app/actions';
import { Loader2, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const FormSchema = z.object({
  query: z.string().min(3, 'Query must be at least 3 characters.'),
});

export function AnalysisForm() {
  const { t } = useTranslation('services.analysis.aiTool');
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<string[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { query: '' },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setTopics([]);
    try {
      const result = await requestAnalysisAssistance(data.query);
      if (result && result.topics) {
        setTopics(result.topics);
      }
    } catch (error) {
      console.error('Failed to get analysis topics:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleWhatsAppRedirect = () => {
    const message = `Bonjour Coach Romaric, je suis intéressé(e) par une analyse personnalisée sur les sujets suivants :\n\n- ${topics.join('\n- ')}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('inputPlaceholder')}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t('inputPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('generating')}
              </>
            ) : (
              t('button')
            )}
          </Button>
        </form>
      </Form>

      {topics.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-headline text-lg">{t('resultsTitle')}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5">
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
             <Button className="mt-6" onClick={handleWhatsAppRedirect}>
                <Send className="mr-2 h-4 w-4" />
                {t('whatsappCta')}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
