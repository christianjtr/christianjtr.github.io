import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import { ProjectSchema } from './schemas/ProjectSchema';
import { ExperienceSchema } from './schemas/ExperienceSchema';
import { StudySchema } from './schemas/StudySchema';
import { ExperimentSchema } from './schemas/ExperimentSchema';

// const about = defineCollection({
//     loader: file("./src/content/about.json"),
//     schema: z.object({
//         fullName: z.string(),
//         profession: z.string(),
//         linkedInURL: z.string().url(),
//         githubURL: z.string().url(),
//         hobbies: z.string(),
//         introduction: z.object({
//             greetings: z.string(),
//             presentation: z.string(),
//             about: z.string(),
//         }),
//         languages: z.array(z.object({
//             id: z.string(),
//             emoji: z.string(),
//             language: z.string(),
//             proficiency: z.string(),
//             proficiencyValue: z.number().int().min(0).max(100),
//         })),
//         knowledge: z.array(z.string()),
//         aptitudes: z.array(z.string()),
//         tech_knowledge: z.array(z.string()),
//         memberships: z.array(z.object({
//             id: z.string(),
//             type: z.string(),
//             organization: z.string(),
//             imageURL: z.string().optional(),
//             degree: z.string().optional(),
//             showMembershipId: z.boolean(),
//             member_no: z.string().optional(),
//             showURL: z.boolean(),
//             url: z.string().url().optional(),
//             display: z.boolean(),
//         })),
//     }),
// });

const projects = defineCollection({
    loader: file("./src/content/projects.json"),
    schema: ProjectSchema,
});

const experiences = defineCollection({
    loader: file("./src/content/experiences.json"),
    schema: ExperienceSchema,
});

const studies = defineCollection({
    loader: file("./src/content/studies.json"),
    schema: StudySchema,
});

const experiments = defineCollection({
    loader: file("./src/content/experiments.json"),
    schema: ExperimentSchema,
});

export const collections = { experiences, studies, projects, experiments };
