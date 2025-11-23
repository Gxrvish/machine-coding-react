"use client";

import Editor from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

import { highlightMarkdown } from "./renderMarkdownAction";

const initialMarkdown = `# Welcome to Markdown Preview Editor

This is a simple markdown editor. Start typing your markdown on the left, and see the preview on the right!`;

const MarkdownPreviewEditor = () => {
    const [markdown, setMarkdown] = useState(initialMarkdown);
    const [html, setHtml] = useState("Loading…");
    const [editorWidth, setEditorWidth] = useState(850);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const startDrag = () => {
        isDragging.current = true;
        document.body.style.cursor = "col-resize";
    };

    const onDrag = (e: MouseEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const newWidth = e.clientX - rect.left;
        setEditorWidth(Math.min(Math.max(newWidth, 250), rect.width - 250));
    };

    const stopDrag = () => {
        isDragging.current = false;
        document.body.style.cursor = "default";
    };

    useEffect(() => {
        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", stopDrag);
        return () => {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", stopDrag);
        };
    }, []);

    useEffect(() => {
        let active = true;
        const run = async () => {
            const out = await highlightMarkdown(markdown);
            if (active) setHtml(out);
        };
        run();
        return () => {
            active = false;
        };
    }, [markdown]);

    return (
        <div
            ref={containerRef}
            className="h-screen flex overflow-hidden select-none"
        >
            {/* LEFT PANE */}
            <div
                style={{ width: editorWidth }}
                className="overflow-hidden border-r bg-[#1e1e1e]"
            >
                <Editor
                    height="100%"
                    defaultLanguage="markdown"
                    value={markdown}
                    onChange={(v) => setMarkdown(v || "")}
                    theme="vs-dark"
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        wordWrap: "on",
                    }}
                />
            </div>

            {/* DRAG HANDLE */}
            <div
                onMouseDown={startDrag}
                className="w-2 cursor-col-resize bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            />

            {/* RIGHT PANE */}
            <div className="flex-1 overflow-auto p-8 prose max-w-none dark:prose-invert bg-white">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
    );
};

export default MarkdownPreviewEditor;
