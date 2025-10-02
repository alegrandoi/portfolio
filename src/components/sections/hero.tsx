'use client';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center text-center"
    >
      <div className="mx-auto space-y-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Alejandro Rodríguez Gómez
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
          {t('hero.subtitle')}
        </p>
        <p className="mx-auto max-w-[700px] text-xl font-medium text-primary md:text-2xl">
          {t('hero.quote')}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href="/CV-Alejandro-Rodriguez-Gomez.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              {t('hero.downloadCv')}
            </a>
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <a
                href="https://github.com/alegrandoi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <a
                href="https://www.linkedin.com/in/alejandro-rodríguez-gómez-b5401029b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-12 w-12">
              <a href="mailto:zzalejandro3@gmail.com" aria-label={t('hero.contactAriaLabel')}>
                <Mail />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </a>
    </section>
  );
}
