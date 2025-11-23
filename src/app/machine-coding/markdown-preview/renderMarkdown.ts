import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import * as shiki from "shiki";

let highlighter: unknown;

export async function renderMarkdown(md: string) {
    if (!highlighter) {
        highlighter = await shiki.createHighlighter({
            themes: ["github-dark"],
            langs: [],
        });
    }

    const file = await remark()
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(md);

    return String(file);
}
