'use client';
import SectionWrapper from '@/components/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export default function Experience() {
  const { t } = useI18n();

  const experiences = [
    {
      role: t('experience.job1.role'),
      company: 'Tier 1 Technology',
      period: '2024',
      tasks: [
        t('experience.job1.task1'),
        t('experience.job1.task2'),
        t('experience.job1.task3'),
        t('experience.job1.task4'),
        t('experience.job1.task5'),
      ],
    },
    {
      role: t('experience.job2.role'),
      company: 'Tier 1 Technology',
      period: '2024',
      tasks: [
        t('experience.job2.task1'),
        t('experience.job2.task2'),
        t('experience.job2.task3'),
      ],
    },
    {
      role: t('experience.job3.role'),
      company: 'Alep Interpiel SL',
      period: '2015',
      tasks: [
        t('experience.job3.task1'),
        t('experience.job3.task2'),
      ],
    },
    {
      role: t('experience.job4.role'),
      company: t('experience.job4.company'),
      period: '2014',
      tasks: [t('experience.job4.task1'), t('experience.job4.task2')],
    },
  ];

  return (
    <SectionWrapper id="experience" title={t('experience.title')}>
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
