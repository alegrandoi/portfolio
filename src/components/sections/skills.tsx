'use client';
import SectionWrapper from '@/components/section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, GitMerge, Users, Languages } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

const SkillCard = ({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}) => (
  <Card className="flex h-full flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <CardHeader className="items-center">
      <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
        {icon}
      </div>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-1 flex-wrap items-center justify-center gap-2">
      {skills.map(skill => (
        <Badge key={skill} variant="secondary" className="text-sm font-medium">
          {skill}
        </Badge>
      ))}
    </CardContent>
  </Card>
);

export default function Skills() {
  const { t } = useI18n();

  const skillsData = {
    backend: {
      title: t('skills.backend.title'),
      icon: <Code className="h-8 w-8" />,
      skills: ['Java', 'Spring Boot', 'Maven', 'Python', 'SQL'],
    },
    tools: {
      title: t('skills.tools.title'),
      icon: <GitMerge className="h-8 w-8" />,
      skills: ['Git', 'GitHub', t('skills.tools.scrum')],
    },
    soft: {
      title: t('skills.soft.title'),
      icon: <Users className="h-8 w-8" />,
      skills: [
        t('skills.soft.teamwork'),
        t('skills.soft.communication'),
        t('skills.soft.problemSolving'),
        t('skills.soft.continuousLearning'),
      ],
    },
    languages: {
      title: t('skills.languages.title'),
      icon: <Languages className="h-8 w-8" />,
      skills: [t('skills.languages.spanish'), t('skills.languages.english')],
    },
  };

  return (
    <SectionWrapper
      id="skills"
      title={t('skills.title')}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <SkillCard {...skillsData.backend} />
        <SkillCard {...skillsData.tools} />
        <SkillCard {...skillsData.soft} />
        <SkillCard {...skillsData.languages} />
      </div>
    </SectionWrapper>
  );
}
