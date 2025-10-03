'use server';
/**
 * @fileOverview A flow to generate a forward-looking statement showcasing projected skills growth.
 *
 * - generateProjectedSkillsStatement - A function that generates the projected skills statement.
 * - ProjectedSkillsGrowthInput - The input type for the generateProjectedSkillsStatement function.
 * - ProjectedSkillsGrowthOutput - The return type for the generateProjectedSkillsStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectedSkillsGrowthInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  currentRole: z.string().describe('The current role of the person.'),
  currentSkills: z.string().describe('The current skills of the person.'),
  futureAreasOfInterest: z
    .string()
    .describe(
      'The areas of technology and skills the person is interested in learning.'
    ),
  lang: z.enum(['es', 'en']).describe('The language for the output.'),
});
export type ProjectedSkillsGrowthInput = z.infer<
  typeof ProjectedSkillsGrowthInputSchema
>;

const ProjectedSkillsGrowthOutputSchema = z.object({
  projectedSkillsStatement: z
    .string()
    .describe('A forward-looking statement showcasing projected skills growth.'),
});
export type ProjectedSkillsGrowthOutput = z.infer<
  typeof ProjectedSkillsGrowthOutputSchema
>;

export async function generateProjectedSkillsStatement(
  input: ProjectedSkillsGrowthInput
): Promise<ProjectedSkillsGrowthOutput> {
  return projectedSkillsGrowthFlow(input);
}

const prompt = ai.definePrompt({
  name: 'projectedSkillsGrowthPrompt',
  input: {schema: ProjectedSkillsGrowthInputSchema},
  output: {schema: ProjectedSkillsGrowthOutputSchema},
  prompt: `You are a career advisor helping professionals articulate their future career aspirations in a catchy and human way.

  Based on the following information, craft a concise and compelling statement (at most two sentences) for {{name}}.

  The statement must be inspiring and forward-thinking. It should clearly distinguish between their current expertise and their future aspirations.

  1.  Acknowledge their existing skills ({{currentSkills}}) as a strong foundation they are committed to continuously improving.
  2.  Express their excitement and curiosity to learn about their future areas of interest ({{futureAreasOfInterest}}), which they do not yet master.

  Example Structure: "While I continue to master [current skills], my curiosity is now leading me to explore [future interests] to build even more complete solutions."

  Name: {{name}}
  Current Role: {{currentRole}}
  Known Skills: {{currentSkills}}
  Future Areas of Interest: {{futureAreasOfInterest}}

  The output language must be {{lang}}.
  `,
});

const projectedSkillsGrowthFlow = ai.defineFlow(
  {
    name: 'projectedSkillsGrowthFlow',
    inputSchema: ProjectedSkillsGrowthInputSchema,
    outputSchema: ProjectedSkillsGrowthOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
