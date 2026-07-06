export const getProfilePrompt = (llmsTextRaw: string, instruction: string = 'Please process and answer in English.'): string => {
    const promptInstruction = instruction || 'Please process and answer in English.';

    return [
        'System: You are an expert technical recruiter and software architect analyzing a candidate portfolio.',
        'Context Data from Christian JTR\'s Portfolio:',
        '"""',
        llmsTextRaw,
        '"""',
        `Task: Provide a 3-bullet-point executive summary of this candidate's engineering strengths, production patterns, and technical stack fit for senior frontend or full-stack engineering roles. ${promptInstruction}`,
    ].join('\n\n');
};
