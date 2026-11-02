import { z } from 'astro/zod';

const WorkCategorySchema = z.enum([
    "consulting",
    "product-engineering",
    "solutions-engineering",
    "enterprise-software",
]);

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string(),
    showcased_at: z.string(),
    flag: z.string(),
    flag_asset: z.string(),
    project_asset: z.string(),
    owner: z.string(),
    url: z.url().nullable().optional(),
    period: z.string(),
    location: z.string(),
    contribute_as: z.string(),
    contributions: z.string(),
    overview: z.string(),
    summary: z.string(),
    technologies: z.array(z.string()),
    section: z.literal('projects'),
    outcome: z.string()
});

export const WorkCaseStudySchema = z.object({
    id: z.string(),
    company: z.string().trim().min(1),
    title: z.string(),
    role: z.string().trim().min(1),
    period: z.string(),
    category: WorkCategorySchema,
    category_description: z.string(),
    summary: z.string().nullable().optional(),
    tags: z.array(z.string().trim().min(1)).nullable().optional(),
    resource: z.string().nullable().optional(),
    display: z.boolean(),
    contributions: z.array(z.string())
});

export type WorkCaseStudy = z.infer<typeof WorkCaseStudySchema>;
export type WorkCategory = z.infer<typeof WorkCategorySchema>;
export type Project = z.infer<typeof ProjectSchema>;
