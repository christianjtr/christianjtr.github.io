import { z } from 'astro:content';

const LanguageSchema = z.object({
    id: z.string(),
    emoji: z.string(),
    name: z.string(),
    proficiency: z.string(),
    value: z.number().min(0)
});

export { LanguageSchema };