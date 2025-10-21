import { z } from 'astro:content';
import { LanguageSchema } from './LanguageSchema';
import { SubjectSchema } from './SubjectSchema';

const BaseSectionSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
});

const CommonTextSchema = z.object({
    overview: z.string(),
    role: z.string(),
    contribuition: z.string(),
    technologies: z.string(),
    showcased_at: z.string(),
    view_more: z.string(),
    countries_worked_in: z.string(),
    companies_worked_for: z.string(),
    key_areas: z.string(),
    key_contribuitions: z.string(),
    ongoing: z.string(),
    cannot_load_content: z.string()
});

const SectionExperiencesSchema = z.object({
    ...BaseSectionSchema.shape,
    collaborated_with: z.string(),
    companies_across_regions: z.string(),
    regions: z.array(z.string()),
    key_areas: z.array(z.string())
});

const SectionCredentialSchema = z.object({
    ...BaseSectionSchema.shape,
});

const SectionProjectsSchema = z.object({
    ...BaseSectionSchema.shape,
});

const SectionExperimentsSchema = z.object({
    ...BaseSectionSchema.shape,
});

const SectionAboutSchema = z.object({
    greeting: z.string(),
    my_name: z.string(),
    about_me: z.string(),
    summary: z.string(),
    hobbies_title: z.string(),
    hobbies: z.string(),
    v_shaped_profile: z.string(),
    v_shaped_explanation: z.string(),
    language_tip: z.string(),
    languages: z.array(LanguageSchema),
    expertise: z.object({
        title: z.string(),
        subjects: z.array(SubjectSchema)
    })
});

export {
    CommonTextSchema,
    SectionExperiencesSchema,
    SectionCredentialSchema,
    SectionProjectsSchema,
    SectionExperimentsSchema,
    SectionAboutSchema
};
