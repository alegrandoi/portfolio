
'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
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
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

import LibreriaImage from '../../../public/fondo-libreria-enlinea.png';
import TareasImage from '../../../public/fondo-tareas&notas.png';
import SocialmovieImage from '../../../public/socialmovie-project.jpg';

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  imageHint: string;
  tags: string[];
  link: string;
};

export default function Projects() {
  const [statement, setStatement] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [temperature, setTemperature] = useState([0.7]);
  const { toast } = useToast();
  const { t, lang } = useI18n();

  const handleGenerate = async () => {
    setIsLoading(true);
    setStatement('');
    try {
      const result = await generateProjectedStatementAction(lang, temperature[0]);
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

  const projects: Project[] = [
    {
      title: t('projects.libreria.title'),
      description: t('projects.libreria.description'),
      image: LibreriaImage,
      imageHint: 'book shop',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        t('projects.libreria.tag1'),
        t('projects.libreria.tag2'),
      ],
      link: 'https://github.com/alegrandoi/libreria-enlinea',
    },
    {
      title: t('projects.tareas.title'),
      description: t('projects.tareas.description'),
      image: TareasImage,
      imageHint: 'tasks notes',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Angular Material', 'i18n'],
      link: 'https://github.com/alegrandoi/angular-tareas-notas-es',
    },
    {
      title: t('projects.socialmovie.title'),
      description: t('projects.socialmovie.description'),
      image: SocialmovieImage,
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
                  className="rounded-md object-contain"
                  data-ai-hint={project.imageHint}
                  placeholder="blur"
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
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Label htmlFor="temperature">{t('projects.creativity.label')} ({temperature[0]})</Label>
                <span className="text-xs text-muted-foreground">{t('projects.creativity.more')} → 1</span>
              </div>
              <Slider
                id="temperature"
                min={0}
                max={1}
                step={0.1}
                value={temperature}
                onValueChange={setTemperature}
                disabled={isLoading}
              />
            </div>
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
