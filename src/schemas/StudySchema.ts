import { z } from "astro:content";

export const StudySchema = z.object({
    id: z.string(),
    school: z.string(),
    degree: z.string(),
    isOngoing: z.boolean(),
    level: z.string(),
    period: z.string(),
    description: z.string(),
    topics: z.array(z.string()),
    subject: z.string(),
});