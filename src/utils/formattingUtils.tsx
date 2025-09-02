import React from "react";

export interface RichText {
    text: string;
    emphasis?: { text: string }[];
    link?: { text: string; url: string }[];
}

type Part = string | React.ReactNode;

/** Escape regex metacharacters so `s` is matched literally in new RegExp(). */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Replaces matching text with react nodes
function replaceInline(
    parts: Part[],
    textToMatch: string,
    makeNode: (key: string) => React.ReactNode
): Part[] {
    if (!textToMatch) return parts;
    const re = new RegExp(`(${esc(textToMatch)})`, "g");
    const out: Part[] = [];

    parts.forEach((p, i) => {
        if (typeof p === "string") {
            p.split(re).forEach((seg) => {
                out.push(seg === textToMatch ? makeNode(`${i}`) : seg);
            });
        } else {
            out.push(p);
        }
    });

    return out;
}

// Builds an array of strings and React nodes from a RichText object,
// replacing strings with styled spans and anchor tags, and returns
// them wrapped in a React fragment.
export function renderRichText(richText: RichText, className?: string) {
    let parts: Part[] = [richText.text];

    // Replace matching text with spans styled by provided className
    (richText.emphasis ?? []).forEach(({ text }, idx) => {
        parts = replaceInline(parts, text, () => (
            <span className={className} key={`e-${idx}`}>
                {text}
            </span>
        ));
    });

    // Replace matching text with anchor tags
    (richText.link ?? []).forEach(({ text, url }, idx) => {
        parts = replaceInline(parts, text, () => {
            return (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`a-${idx}`}
                >
                    {text}
                </a>
            );
        });
    });

    return <>{parts}</>;
}
