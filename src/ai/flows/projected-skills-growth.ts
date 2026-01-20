
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
  prompt: `You are a highly creative career advisor. Your mission is to craft DRASTICALLY DIFFERENT statements each time.

  CRITICAL INSTRUCTIONS:
  - NEVER use the same sentence structure twice
  - VARY the tone: professional, passionate, visionary, determined, ambitious, reflective
  - ALTERNATE between different narrative styles: storytelling, direct, metaphorical, future-focused, journey-based
  - USE different word choices and expressions every single time
  - CHANGE the emphasis: sometimes focus more on current skills, other times on future aspirations
  - BE BOLD and creative with your phrasing

  Create a compelling 1-2 sentence statement for {{name}} based on:
  Current Role: {{currentRole}}
  Current Skills: {{currentSkills}}
  Future Interests: {{futureAreasOfInterest}}

  VARY YOUR APPROACH - Choose randomly from these different styles:

  Style 1 - Confident & Forward: "With [current skills] as my toolkit, I'm ready to conquer [future interests]."
  Style 2 - Journey Metaphor: "My path has been paved with [current skills], but the horizon calls me toward [future interests]."
  Style 3 - Passionate & Bold: "I breathe [current skills], yet my heart races for [future interests]."
  Style 4 - Balanced Growth: "While perfecting [current skills], I'm simultaneously diving into [future interests]."
  Style 5 - Visionary: "Today's mastery of [current skills] is tomorrow's foundation for [future interests]."
  Style 6 - Determined: "[Current skills] built me. [Future interests] will transform me."
  Style 7 - Reflective: "Years with [current skills] taught me well, now [future interests] beckon."
  Style 8 - Action-Oriented: "I'm leveraging [current skills] to breakthrough into [future interests]."
  Style 9 - Poetic: "Anchored in [current skills], sailing toward [future interests]."
  Style 10 - Direct & Punchy: "Expert in [current skills]. Next target: [future interests]."

  Temperature setting: {{temperature}}
  - Below 0.3 = More professional and structured
  - 0.3-0.7 = Balanced creativity
  - Above 0.7 = Maximum creativity and boldness

  Language: {{lang}}

  Remember: Make it NOTICEABLY DIFFERENT from any previous generation!
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
