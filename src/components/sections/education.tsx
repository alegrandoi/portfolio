import SectionWrapper from '@/components/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';

const education = [
  {
    type: 'degree',
    title: 'Ingeniería Informática, mención en Ingeniería del Software',
    institution: 'Universidad de Sevilla',
    period: '2020 - Presente',
  },
  {
    type: 'degree',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    institution: 'IES Los Remedios, Sevilla',
    period: '2012 - 2014',
  },
];

const courses = [
  'Spring Core, Spring MVC & Spring REST',
  'Clean Code: Writing Code for Humans',
  'Hibernate & Java Persistence API (JPA)',
  'Python for Everybody (Coursera)',
  'Git & GitHub para desarrolladores',
  'Conceptos básicos de la seguridad digital',
];

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Formación y Cursos"
      className="bg-muted/50"
    >
      <div className="grid gap-12">
        <div>
          <h3 className="mb-6 text-center font-headline text-2xl font-bold md:text-left">
            Formación Reglada
          </h3>
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border">
            {education.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[1.3rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      {edu.title}
                    </CardTitle>
                    <CardDescription>
                      {edu.institution} • {edu.period}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-center font-headline text-2xl font-bold md:text-left">
            Cursos Recientes (2024-2025)
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card key={index} className="flex items-center gap-4 p-4">
                <BookOpen className="h-6 w-6 shrink-0 text-accent" />
                <p className="font-medium">{course}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
