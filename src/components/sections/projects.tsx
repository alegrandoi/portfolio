
'use client';

import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import SectionWrapper from '@/components/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateProjectedStatementAction } from '@/lib/actions';

export default function Projects() {
  const [statement, setStatement] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setStatement('');
    try {
      const result = await generateProjectedStatementAction();
      if (result.projectedSkillsStatement) {
        setStatement(result.projectedSkillsStatement);
      } else {
        throw new Error('No se pudo generar la declaración.');
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description:
          'Hubo un problema al generar la proyección. Inténtalo de nuevo.',
        variant: 'destructive',
      });
      setStatement(
        'Aquí próximamente mostraré mis proyectos personales. Estoy aprendiendo nuevas tecnologías y pronto compartiré aplicaciones completas en frontend, cloud e inteligencia artificial.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="projects" title="Proyectos y Proyección">
      <div className="space-y-8 text-center">
        <p className="text-lg text-muted-foreground">
          Actualmente estoy enfocado en consolidar mis conocimientos y construir
          proyectos personales sólidos. Para mostrar mi ambición y enfoque a
          futuro, he utilizado IA para generar una declaración de mis
          aspiraciones profesionales.
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
                Haz clic en el botón para generar una proyección de mis futuras
                habilidades y áreas de interés.
              </p>
            )}
          </CardContent>
        </Card>
        <Button onClick={handleGenerate} disabled={isLoading} size="lg">
          <Wand2 className="mr-2 h-4 w-4" />
          {isLoading ? 'Generando...' : 'Generar Proyección Profesional'}
        </Button>
      </div>
    </SectionWrapper>
  );
}
