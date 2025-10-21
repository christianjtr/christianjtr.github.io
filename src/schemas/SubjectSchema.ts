import { z } from 'astro:content';

const subjectCategory = ["product", "coding", "data"] as const;

const SubjectSchema = z.object({
    name: z.string(),
    category: z.enum(subjectCategory),
    topics: z.array(z.string())
});

export type SubjectCategory = typeof subjectCategory[number];
export { SubjectSchema };
