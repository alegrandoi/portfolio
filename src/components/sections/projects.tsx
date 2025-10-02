
'use client';

import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateProjectedStatementAction } from '@/lib/actions';
import { useI18n } from '@/hooks/use-i18n';

export default function Projects() {
  const [statement, setStatement] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t, lang } = useI18n();

  const handleGenerate = async () => {
    setIsLoading(true);
    setStatement('');
    try {
      const result = await generateProjectedStatementAction(lang);
      if (result.projectedSkillsStatement) {
        setStatement(result.projectedSkillsStatement);
      } else {
        throw new Error(t('projects.errors.generationFailed'));
      }
    } catch (error) {
      console.error(error);
      toast({
        title: t('projects.errors.title'),
        description:
          t('projects.errors.description'),
        variant: 'destructive',
      });
      setStatement(
        t('projects.errors.fallback')
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="projects" title={t('projects.title')}>
      <div className="space-y-8 text-center">
        <p className="text-lg text-muted-foreground">
          {t('projects.description')}
        </p>
        <Card className="flex min-h-[150px] items-center justify-center">
          <CardContent className="p-6">
            {isLoading ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            ) : statement ? (
              <blockquote className="border-l-4 border-accent pl-4 text-left text-xl italic">
                {statement}
              </blockquote>
            ) : (
              <p className="text-muted-foreground">
                {t('projects.prompt')}
              </p>
            )}
          </CardContent>
        </Card>
        <Button onClick={handleGenerate} disabled={isLoading} size="lg">
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? t('projects.button.loading') : t('projects.button.default')}
        </Button>
      </div>
    </SectionWrapper>
  );
}
