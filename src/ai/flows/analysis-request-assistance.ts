'use server';

/**
 * @fileOverview This file defines a Genkit flow for assisting potential clients in formulating custom crypto analysis requests.
 *
 * The flow uses an AI-powered tool to suggest relevant topics for analysis, making it easier for clients to create their requests.
 *
 * - `generateAnalysisTopics` - A function that suggests relevant topics for crypto analysis based on a user's initial query.
 * - `AnalysisTopicsInput` - The input type for the `generateAnalysisTopics` function, representing the user's query.
 * - `AnalysisTopicsOutput` - The output type for the `generateAnalysisTopics` function, providing a list of suggested analysis topics.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalysisTopicsInputSchema = z.object({
  query: z
    .string()
    .describe('The user query to generate topic ideas.'),
});
export type AnalysisTopicsInput = z.infer<typeof AnalysisTopicsInputSchema>;

const AnalysisTopicsOutputSchema = z.object({
  topics: z
    .array(z.string())
    .describe('An array of suggested topics for crypto analysis.'),
});
export type AnalysisTopicsOutput = z.infer<typeof AnalysisTopicsOutputSchema>;

export async function generateAnalysisTopics(input: AnalysisTopicsInput): Promise<AnalysisTopicsOutput> {
  return analysisRequestAssistanceFlow(input);
}

const analysisRequestAssistancePrompt = ai.definePrompt({
  name: 'analysisRequestAssistancePrompt',
  input: {schema: AnalysisTopicsInputSchema},
  output: {schema: AnalysisTopicsOutputSchema},
  prompt: `You are an AI assistant designed to help users formulate custom crypto analysis requests. Based on the user's initial query, suggest relevant topics for crypto analysis.

  User Query: {{{query}}}

  Consider topics like:
  - Specific cryptocurrencies (e.g., Bitcoin, Ethereum, Solana)
  - DeFi projects
  - NFT collections
  - Market trends
  - Trading strategies
  - Regulatory news

  Provide the output as a JSON array of strings.`,
});

const analysisRequestAssistanceFlow = ai.defineFlow(
  {
    name: 'analysisRequestAssistanceFlow',
    inputSchema: AnalysisTopicsInputSchema,
    outputSchema: AnalysisTopicsOutputSchema,
  },
  async input => {
    const {output} = await analysisRequestAssistancePrompt(input);
    return output!;
  }
);
