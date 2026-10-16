export type ProfilePromptStrings = {
    system: string;
    context: string;
    read: string;
    task: string;
    instruction: string;
};

const DEFAULTS: ProfilePromptStrings = {
    system: 'System: You are an expert technical recruiter and engineer manager analyzing a candidate portfolio.',
    context: "Context Data from Christian JTR's Portfolio:",
    read: 'Read the candidate portfolio at {url}',
    task: "Task: Provide a 3-bullet-point executive summary of this candidate's engineering strengths, production patterns, value the candidate can bring, and technical stack for engineering roles. List roles this candidate is suitable for and why.",
    instruction: 'Please process and answer in English.',
};

const resolve = (strings: Partial<ProfilePromptStrings> = {}): ProfilePromptStrings => ({
    system: strings.system || DEFAULTS.system,
    context: strings.context || DEFAULTS.context,
    read: strings.read || DEFAULTS.read,
    task: strings.task || DEFAULTS.task,
    instruction: strings.instruction || DEFAULTS.instruction,
});

export const getProfilePrompt = (llmsTextRaw: string, strings: Partial<ProfilePromptStrings> = {}): string => {
    const copy = resolve(strings);

    return [
        copy.system,
        copy.context,
        '"""',
        llmsTextRaw,
        '"""',
        `${copy.task} ${copy.instruction}`,
    ].join('\n\n');
};

export const getProfileUrlPrompt = (llmsUrl: string, strings: Partial<ProfilePromptStrings> = {}): string => {
    const copy = resolve(strings);

    return [
        copy.system,
        copy.read.replaceAll('{url}', llmsUrl),
        `${copy.task} ${copy.instruction}`,
    ].join('\n\n');
};
