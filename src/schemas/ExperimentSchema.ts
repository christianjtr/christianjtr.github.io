import { z } from 'astro:content';

export const ExperimentSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    role: z.string(),
    category: z.string(),
    type: z.string(),
    url: z.string().url().nullable(),
});
