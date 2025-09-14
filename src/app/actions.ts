'use server';

import { generateAnalysisTopics, AnalysisTopicsOutput } from "@/ai/flows/analysis-request-assistance";

export async function requestAnalysisAssistance(query: string): Promise<AnalysisTopicsOutput | null> {
    try {
        const result = await generateAnalysisTopics({ query });
        return result;
    } catch (error) {
        console.error("Error in analysis assistance flow: ", error);
        return null;
    }
}
