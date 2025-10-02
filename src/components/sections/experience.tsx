import SectionWrapper from '@/components/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Desarrollador Java',
    company: 'Tier 1 Technology',
    period: '2024 - Presente',
    tasks: [
      'Desarrollo de aplicaciones a medida con Java y Spring Boot.',
      'Creación y mantenimiento de APIs REST.',
      'Gestión de bases de datos SQL.',
      'Resolución de incidencias y soporte técnico.',
      'Colaboración activa en equipo bajo metodologías ágiles.',
    ],
  },
  {
    role: 'Prácticas de empresa',
    company: 'Tier 1 Technology',
    period: '2024',
    tasks: [
      'Desarrollo de personalizaciones de software.',
      'Apoyo al equipo de desarrollo en diversas tareas.',
      'Resolución de incidencias de primer nivel.',
    ],
  },
  {
    role: 'Creación de tienda online (Beca Santander)',
    company: 'Alep Interpiel SL',
    period: '2015',
    tasks: [
      'Creación y gestión de e-commerce con Prestashop.',
      'Personalización de plantillas y módulos.',
    ],
  },
  {
    role: 'Prácticas de Formación Profesional',
    company: 'Empresa Sector Web',
    period: '2014',
    tasks: ['Mantenimiento web.', 'Soporte en tienda online.'],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experiencia Profesional">
      <div className="relative mx-auto max-w-3xl pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-8 last:mb-0">
            <div className="absolute -left-[1.3rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Briefcase className="h-4 w-4" />
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {exp.role}
                </CardTitle>
                <CardDescription>
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
