"use server";

import { renderMarkdown } from "./renderMarkdown";

export async function highlightMarkdown(md: string) {
    return await renderMarkdown(md);
}
