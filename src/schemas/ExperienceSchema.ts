import { z } from 'astro:content';
import { count } from 'console';

export const ExperienceSchema = z.object({
    id: z.string(),
    company: z.string(),
    country: z.string(),
    sector: z.string(),
    location: z.string(),
    position: z.string(),
    period: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
});
