import { z } from 'astro:content';

export const ExperienceSchema = z.object({
    id: z.string(),
    company: z.string(),
    sector: z.string(),
    location: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
});
