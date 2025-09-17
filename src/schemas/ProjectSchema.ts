import { z } from 'astro:content';

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    showcased_at: z.string(),
    flag: z.string(),
    flag_asset: z.string(),
    project_asset: z.string(),
    owner: z.string(),
    url: z.string().url(),
    period: z.string(),
    location: z.string(),
    contribute_as: z.string(),
    contributions: z.string(),
    overview: z.string(),
    technologies: z.array(z.string()),
});