import { defineCollection, z, type BaseSchema } from 'astro:content';
import { glob } from 'astro/loaders';
import type { CollectionConfig } from 'astro/content/config';

import { i18nLocalesConfig } from 'astro.config.mjs';

import { AboutMeSchema } from './schemas/AboutMeSchema';
import { CredentialSchema } from './schemas/CredentialSchema';
import { ProjectSchema } from './schemas/ProjectSchema';
import { ExperienceSchema } from './schemas/ExperienceSchema';
import { StudySchema } from './schemas/StudySchema';
import { ExperimentSchema } from './schemas/ExperimentSchema';

import type { ContentDataEntryType } from './types/Content';

const { locales } = i18nLocalesConfig;

const schema = z.union([
    AboutMeSchema,
    CredentialSchema,
    z.array(ProjectSchema),
    z.array(ExperienceSchema),
    z.array(StudySchema),
    z.array(ExperimentSchema),
]);

export const collections = locales.reduce((acc, locale) => {
    acc[locale as ContentDataEntryType] = defineCollection({
        loader: glob({
            base: './src/content',
            pattern: `${locale}/*.json`
        }),
        schema
    });
    return acc;
}, {} as Record<ContentDataEntryType, CollectionConfig<BaseSchema>>);
