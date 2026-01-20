
'use server';
/**
 * @fileOverview A flow to generate a forward-looking statement showcasing projected skills growth.
 *
 * - generateProjectedSkillsStatement - A function that generates the projected skills statement.
 * - ProjectedSkillsGrowthInput - The input type for the generateProjectedSkillsStatement function.
 * - ProjectedSkillsGrowthOutput - The return type for the generateProjectedSkillsStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

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
  temperature: z.number().min(0).max(1).describe('The creativity of the output.'),
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
  prompt: `You are a creative career advisor helping professionals articulate their future career aspirations in a catchy and human way.

  IMPORTANT: Generate a UNIQUE and CREATIVE statement each time. DO NOT repeat the same response. Use different sentence structures, metaphors, and expressions.

  Based on the following information, craft a concise and compelling statement (at most two sentences) for {{name}}.

  The statement must be inspiring and forward-thinking. It should clearly distinguish between their current expertise and their future aspirations.

  Guidelines:
  1.  Acknowledge their existing skills ({{currentSkills}}) as a strong foundation they are committed to continuously improving.
  2.  Express their excitement and curiosity to learn about their future areas of interest ({{futureAreasOfInterest}}), which they do not yet master.
  3.  Use varied expressions, different word choices, and creative phrasing each time.
  4.  Make it personal, authentic, and unique.

  Example styles (use different approaches each time):
  - "While I continue to master [current skills], my curiosity is now leading me to explore [future interests] to build even more complete solutions."
  - "Deep expertise in [current skills] fuels my drive, yet I'm equally passionate about diving into [future interests]."
  - "My foundation in [current skills] is strong, but I'm eager to expand into [future interests] to create more impactful solutions."

  Name: {{name}}
  Current Role: {{currentRole}}
  Known Skills: {{currentSkills}}
  Future Areas of interest: {{futureAreasOfInterest}}
  Creativity level: {{temperature}} (higher = more creative and unique)

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
    const {output} = await prompt(input, {
      config: {
        temperature: input.temperature,
        // Prevent caching by adding variation
        stopSequences: [],
      },
    });
    return output!;
  }
);
