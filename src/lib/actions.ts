
'use server';

import { generateProjectedSkillsStatement } from '@/ai/flows/projected-skills-growth';
import type { ProjectedSkillsGrowthOutput } from '@/ai/flows/projected-skills-growth';
import { Language } from '@/context/i18n-provider';

export async function generateProjectedStatementAction(lang: Language): Promise<ProjectedSkillsGrowthOutput> {
  const input = {
    name: 'Alejandro Rodríguez Gómez',
    currentRole: lang === 'es' ? 'Desarrollador Java' : 'Java Developer',
    currentSkills: 'Java, Spring Boot, Maven, SQL, APIs REST, Git, Python',
    futureAreasOfInterest:
      lang === 'es' ? 'Frontend, cloud computing, inteligencia artificial, arquitectura de software' : 'Frontend, cloud computing, artificial intelligence, software architecture',
    lang: lang,
  };
  return await generateProjectedSkillsStatement(input);
}
