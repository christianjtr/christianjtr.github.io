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
    subjects: z.string(),
    showcased_at: z.string(),
    view_more: z.string(),
    countries_worked_in: z.string(),
    companies_worked_for: z.string(),
    key_areas: z.string(),
    key_contribuitions: z.string(),
    ongoing: z.string(),
    cannot_load_content: z.string(),
    author: z.string(),
    contributor: z.string(),
    educational_level: z.string(),
    formal_studies_taken: z.string(),
    experiences: z.string(),
    list: z.string(),
    timeline: z.string(),
    flip_to_check_stack: z.string(),
});

const OpenGraphSchema = z.object({
    title: z.string(),
    description: z.string()
});

const HeaderSchema = z.object({
    languages_title: z.string(),
    languages: z.array(z.object({
        locale: z.string(),
        name: z.string()
    })),
    main_sections: z.array(z.object({
        anchorId: z.string(),
        label: z.string()
    }))
});

const FooterSchema = z.object({
    powered_and_themed_by: z.string(),
    assets: z.string(),
});

const SectionCredentialSchema = BaseSectionSchema.extend({});
const SectionProjectsSchema = BaseSectionSchema.extend({});
const SectionExperimentsSchema = BaseSectionSchema.extend({});

const SectionExperiencesSchema = BaseSectionSchema.extend({
    collaborated_with: z.string(),
    companies_across_regions: z.string(),
    companies_and_countries_lived_in: z.string(),
    countries: z.array(z.string()),
    key_areas: z.array(z.string()),
    full_countries: z.array(z.string()),
    key_studies: z.array(z.string()),
});

const SectionStudiesSchema = BaseSectionSchema.extend({
    key_subjects: z.array(z.string()),
    educational_level: z.string()
});

const MembershipSchema = z.object({
    id: z.string(),
    type: z.string(),
    organization: z.string(),
    imageURL: z.string(),
    degree: z.string().nullable(),
    showMembershipId: z.boolean(),
    member_no: z.string(),
    showURL: z.boolean(),
    url: z.string().url().nullable(),
    display: z.boolean(),
});

const SectionAboutSchema = z.object({
    greeting: z.string(),
    my_name: z.string(),
    my_name_template: z.string(),
    about_me: z.string(),
    summary: z.string(),
    hobbies_title: z.string(),
    hobbies: z.string(),
    v_shaped_profile: z.string(),
    v_shaped_explanation: z.string(),
    language_tip: z.string(),
    linkedInURL: z.string().url(),
    githubURL: z.string().url(),
    avatar_messages: z.array(z.string()),
    languages: z.array(LanguageSchema),
    expertise: z.object({
        title: z.string(),
        subjects: z.array(SubjectSchema)
    }),
    memberships: z.array(MembershipSchema),
}).extend(BaseSectionSchema.shape);

export const AboutMeSchema = z.object({
    common: CommonTextSchema,
    header: HeaderSchema,
    open_graph: OpenGraphSchema,
    footer: FooterSchema,
    section_about: SectionAboutSchema,
    section_credentials: SectionCredentialSchema,
    section_projects: SectionProjectsSchema,
    section_experiments: SectionExperimentsSchema,
    section_experiences: SectionExperiencesSchema,
    section_studies: SectionStudiesSchema,
});

export type AboutMeData = z.infer<typeof AboutMeSchema>;
