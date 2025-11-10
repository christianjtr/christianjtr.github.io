import { z } from "astro:content";

export const StudySchema = z.object({
    id: z.string(),
    start_year: z.number(),
    end_year: z.number(),
    school: z.string(),
    degree: z.string(),
    isOngoing: z.boolean(),
    level: z.string(),
    period: z.string(),
    description: z.string(),
    country: z.string(),
    location: z.string(),
    flag_asset: z.string(),
    topics: z.array(z.string()),
    subject: z.string(),
    section: z.literal('studies')
});

export type Study = z.infer<typeof StudySchema> & {
    type: "study";
};
