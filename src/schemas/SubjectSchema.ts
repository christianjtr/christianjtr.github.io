import { z } from 'astro/zod';

const subjectCategory = ["product", "coding", "data"] as const;

export const SubjectSchema = z.object({
    name: z.string(),
    category: z.enum(subjectCategory),
    description: z.string(),
    topics: z.array(z.string()),
    tools: z.array(z.string())
});

export type SubjectCategory = typeof subjectCategory[number];
export type Subject = z.infer<typeof SubjectSchema>;
