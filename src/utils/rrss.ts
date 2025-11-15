type LinkIcon = "linkedin" | "github" | "llms";

const rrssLinks: Array<{ id: LinkIcon, text: string; url: string }> = [
    { id: "linkedin", text: "LinkedIn", url: "https://www.linkedin.com/in/christianjtr/" },
    { id: "github", text: "GitHub", url: "https://github.com/christianjtr" },
    { id: "llms", text: "LLMS.txt", url: "/llms.txt" }
];

export { rrssLinks };