export const getProfilePrompt = (llmsTextRaw: string, instruction: string = 'Please process and answer in English.'): string => {
    const promptInstruction = instruction || 'Please process and answer in English.';

    return [
        'System: You are an expert technical recruiter and engineer manager analyzing a candidate portfolio.',
        'Context Data from Christian JTR\'s Portfolio:',
        '"""',
        llmsTextRaw,
        '"""',
        `Task: Provide a 3-bullet-point executive summary of this candidate's engineering strengths, production patterns, value the candidate can bring, and technical stack for engineering roles. List roles this candidate is suitable for and why. ${promptInstruction}`,
    ].join('\n\n');
};
