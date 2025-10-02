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
  prompt: `You are a career advisor helping professionals articulate their future career aspirations.

  Based on the following information, craft a concise and compelling statement
  showcasing {{name}}'s projected skills growth and areas of interest. This statement
  should convey ambition, a proactive approach to learning, and a forward-thinking mindset.

  Name: {{name}}
  Current Role: {{currentRole}}
  Current Skills: {{currentSkills}}
  Future Areas of Interest: {{futureAreasOfInterest}}

  Statement: Focus on future aspirations, do not use past experience. The statement should be at most two sentences long.
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
