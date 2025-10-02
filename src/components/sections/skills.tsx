import SectionWrapper from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, GitMerge, Users, Languages } from 'lucide-react';

const skillsData = {
  backend: {
    title: 'Lenguajes & Backend',
    icon: <Code className="h-8 w-8" />,
    skills: ['Java', 'Spring Boot', 'Maven', 'Python', 'SQL'],
  },
  tools: {
    title: 'Herramientas y Metodologías',
    icon: <GitMerge className="h-8 w-8" />,
    skills: ['Git', 'GitHub', 'Metodologías Ágiles (Scrum)'],
  },
  soft: {
    title: 'Soft Skills',
    icon: <Users className="h-8 w-8" />,
    skills: [
      'Trabajo en equipo',
      'Comunicación',
      'Resolución de problemas',
      'Aprendizaje continuo',
    ],
  },
  languages: {
    title: 'Idiomas',
    icon: <Languages className="h-8 w-8" />,
    skills: ['Español (Nativo)', 'Inglés (B1)'],
  },
};

const SkillCard = ({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) => (
  <Card className="transform-gpu text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <CardHeader className="items-center">
      <div className="mb-2 rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <CardTitle className="font-headline">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap justify-center gap-2">
      {skills.map(skill => (
        <Badge key={skill} variant="secondary" className="text-sm">
          {skill}
        </Badge>
      ))}
    </CardContent>
  </Card>
);

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Habilidades" className="bg-muted/50">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <SkillCard {...skillsData.backend} />
        <SkillCard {...skillsData.tools} />
        <SkillCard {...skillsData.soft} />
        <SkillCard {...skillsData.languages} />
      </div>
    </SectionWrapper>
  );
}
