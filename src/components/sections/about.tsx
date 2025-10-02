
'use client';

import SectionWrapper from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { useI18n } from '@/hooks/use-i18n';

export default function About() {
  const { t } = useI18n();
  return (
    <SectionWrapper id="about" title={t('about.title')}>
      <div className="mx-auto max-w-3xl text-left">
        <Card>
          <CardContent className="p-8 text-lg leading-relaxed text-foreground/80 text-left">
            <p className="mb-4">
              {t('about.p1')}
            </p>
            <p className="mb-4">
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
