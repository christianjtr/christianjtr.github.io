import { z } from 'astro:content';

export const CertificationSchema = z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    url: z.string().url(),
    code: z.string().nullable(),
    display: z.boolean(),
});

export const CrendentialSchema = z.object({
    credly_credentials: z.array(z.string()),
    certifications: z.array(CertificationSchema),
});

export type Credentials = z.infer<typeof CrendentialSchema>;