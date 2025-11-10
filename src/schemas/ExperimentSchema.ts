import { z } from 'astro:content';

enum EXPERIMENT_ROLE {
    AUTHOR = 'Author',
    CONTRIBUTOR = 'Contributor'
}

export type ExperimentRole = `${EXPERIMENT_ROLE}`;

export const ExperimentSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    role: z.nativeEnum(EXPERIMENT_ROLE),
    category: z.string(),
    type: z.string(),
    url: z.string().url().nullable(),
    section: z.literal('experiments')
});

export type Experiment = z.infer<typeof ExperimentSchema>;
