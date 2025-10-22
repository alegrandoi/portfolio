'use client';
import SectionWrapper from '@/components/section-wrapper';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { GraduationCap, BookOpen, ExternalLink } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';
import { Button } from '../ui/button';

export default function Education() {
  const { t } = useI18n();

  const education = [
    {
      type: 'degree',
      title: t('education.formal.degree1.title'),
      institution: t('education.formal.degree1.institution'),
      period: t('education.formal.degree1.period'),
    },
    {
      type: 'degree',
      title: t('education.formal.degree2.title'),
      institution: t('education.formal.degree2.institution'),
      period: t('education.formal.degree2.period'),
    },
  ];

  const courses = [
    {
      title: t('education.courses.course7.title'),
      details: t('education.courses.course7.details'),
      link: t('education.courses.course7.link'),
    },
    {
      title: t('education.courses.course6.title'),
      details: t('education.courses.course6.details'),
      link: t('education.courses.course6.link'),
    },
    {
      title: t('education.courses.course5.title'),
      details: t('education.courses.course5.details'),
      link: t('education.courses.course5.link'),
    },
    {
      title: t('education.courses.course4.title'),
      details: t('education.courses.course4.details'),
      link: t('education.courses.course4.link'),
    },
    {
      title: t('education.courses.course3.title'),
      details: t('education.courses.course3.details'),
      link: t('education.courses.course3.link'),
    },
    {
      title: t('education.courses.course2.title'),
      details: t('education.courses.course2.details'),
      link: t('education.courses.course2.link'),
    },
    {
      title: t('education.courses.course1.title'),
      details: t('education.courses.course1.details'),
      link: t('education.courses.course1.link'),
    },
  ];

  return (
    <SectionWrapper id="education" title={t('education.title')}>
      <div className="grid gap-12">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-6 text-center font-headline text-2xl font-bold">
            {t('education.formal.title')}
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
        <div className="mt-12">
          <h3 className="mb-6 text-center font-headline text-2xl font-bold">
            {t('education.courses.title')}
          </h3>
          <div className="relative mx-auto max-w-3xl pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-border">
            {courses.map((course, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[1.3rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <BookOpen className="h-4 w-4" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.details}</CardDescription>
                  </CardHeader>
                  {course.link && (
                    <CardFooter>
                      <Button asChild variant="secondary">
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t('education.courses.viewCertificate')}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
