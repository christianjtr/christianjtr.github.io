import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const experiences = defineCollection({
    loader: file("./src/content/experiences.json"),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        sector: z.string(),
        location: z.string(),
        position: z.string(),
        period: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
    }),
});

const studies = defineCollection({
    loader: file("./src/content/studies.json"),
    schema: z.object({
        id: z.string(),
        school: z.string(),
        degree: z.string(),
        isOngoing: z.boolean(),
        level: z.string(),
        period: z.string(),
        description: z.string(),
        topics: z.array(z.string()),
        subject: z.string(),
    }),
});

const projects = defineCollection({
    loader: file("./src/content/projects.json"),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        showcased_at: z.string(),
        flag: z.string(),
        owner: z.string(),
        url: z.string(),
        period: z.string(),
        contribute_as: z.string(),
        contributions: z.string(),
        technologies: z.array(z.string()),
    }),
});

export const collections = { experiences, studies, projects };
