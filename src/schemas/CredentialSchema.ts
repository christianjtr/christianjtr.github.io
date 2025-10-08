import { z } from 'astro:content';

const iconKeys = ["book", "pallete", "code"] as const;

const CredlyCredentialSchema = z.object({
    id: z.string(),
    name: z.string(),
    image_url: z.string().url(),
    organization: z.string(),
    badge_url: z.string().url(),
    date: z.string(),
});

const CertificationSchema = z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    organization: z.string(),
    url: z.string().url(),
    icon_key: z.enum(iconKeys),
    code: z.string().nullable(),
    display: z.boolean(),
});

export const CrendentialSchema = z.object({
    credly_credentials: z.array(CredlyCredentialSchema),
    certifications: z.array(CertificationSchema),
});

export type IconKey = typeof iconKeys[number];
export type Credentials = z.infer<typeof CrendentialSchema>;
