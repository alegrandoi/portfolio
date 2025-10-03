
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loader2, Wand2, Github } from 'lucide-react';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
        description: t('projects.errors.description'),
        variant: 'destructive',
      });
      setStatement(t('projects.errors.fallback'));
    } finally {
      setIsLoading(false);
    }
  };

  const projects = [
    {
      title: t('projects.socialmovie.title'),
      description: t('projects.socialmovie.description'),
      image: 'https://picsum.photos/seed/socialmovie/600/400',
      imageHint: 'mobile social',
      tags: [
        'Java',
        'Android Studio',
        'Kotlin',
        'Firebase',
        'Retrofit',
        'Glide',
        'TMDB API',
      ],
      link: 'https://github.com/alegrandoi/socialmovie',
    },
  ];

  return (
    <SectionWrapper id="projects" title={t('projects.title')}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map(project => (
          <Card
            key={project.title}
            className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <div className="relative aspect-video w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-md object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Card className="flex h-full flex-col justify-between overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader>
            <CardTitle>{t('projects.projection.title')}</CardTitle>
            <CardDescription>{t('projects.description')}</CardDescription>
          </CardHeader>
          <CardContent className="flex min-h-[150px] flex-1 items-center justify-center">
            {isLoading ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            ) : statement ? (
              <blockquote className="border-l-4 border-accent pl-4 text-left text-lg italic">
                {statement}
              </blockquote>
            ) : (
              <p className="text-center text-muted-foreground">
                {t('projects.prompt')}
              </p>
            )}
          </CardContent>
          <CardFooter className="flex-col items-stretch gap-4">
            <Button onClick={handleGenerate} disabled={isLoading} size="lg">
              <Wand2 className="mr-2 h-4 w-4" />
              {isLoading
                ? t('projects.button.loading')
                : t('projects.button.default')}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionWrapper>
  );
}
