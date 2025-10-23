import { z } from 'astro:content';

export const ExperienceSchema = z.object({
    id: z.string(),
    start_year: z.number(),
    end_year: z.number(),
    company: z.string(),
    country: z.string(),
    sector: z.string(),
    location: z.string(),
    flag_asset: z.string(),
    position: z.string(),
    period: z.string(),
    isOngoing: z.boolean(),
    description: z.string(),
    contribuitions: z.array(z.string()),
    technologies: z.array(z.string())
});

export type Experience = z.infer<typeof ExperienceSchema> & {
    type: "work";
};

