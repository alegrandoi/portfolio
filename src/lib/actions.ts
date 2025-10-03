
'use server';

import { generateProjectedSkillsStatement } from '@/ai/flows/projected-skills-growth';
import type { ProjectedSkillsGrowthOutput } from '@/ai/flows/projected-skills-growth';
import { Language } from '@/context/i18n-provider';

export async function generateProjectedStatementAction(lang: Language, temperature: number): Promise<ProjectedSkillsGrowthOutput> {
  const input = {
    name: 'Alejandro Rodríguez Gómez',
    currentRole: lang === 'es' ? 'Desarrollador Java' : 'Java Developer',
    currentSkills: 'Java, Spring Boot, Maven, SQL, APIs REST, Git, Python',
    futureAreasOfInterest:
      lang === 'es' ? 'Aunque mi corazón está en el backend, me entusiasma aprender sobre frontend, cloud, IA y arquitectura de software para construir soluciones completas.' : 'While my heart is in backend, I am excited to learn about frontend, cloud, AI, and software architecture to build complete solutions.',
    lang: lang,
    temperature: temperature,
  };
  return await generateProjectedSkillsStatement(input);
}
