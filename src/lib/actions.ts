
'use server';

import { generateProjectedSkillsStatement } from '@/ai/flows/projected-skills-growth';
import type { ProjectedSkillsGrowthOutput } from '@/ai/flows/projected-skills-growth';

export async function generateProjectedStatementAction(): Promise<ProjectedSkillsGrowthOutput> {
  const input = {
    name: 'Alejandro Rodríguez Gómez',
    currentRole: 'Desarrollador Java en Tier 1 Technology',
    currentSkills: 'Java, Spring Boot, Maven, SQL, APIs REST, Git, Python',
    futureAreasOfInterest:
      'Frontend, cloud computing, inteligencia artificial, arquitectura de software',
  };
  return await generateProjectedSkillsStatement(input);
}
