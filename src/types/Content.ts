export enum CONTENT {
    COMMON = "common",
    CREDENTIALS = "credentials",
    EXPERIENCES = "experiences",
    EXPERIMENTS = "experiments",
    PROJECTS = "projects",
    STUDIES = "studies"
}
export type ContentType = `${CONTENT}`;

export const contentDataEntries = ["es", "en", "fr"] as const;
export type ContentDataEntryType = typeof contentDataEntries[number];
