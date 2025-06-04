import React from "react";

const { container, italic, firstBlock, diseaseCopy } = require("../style/about.module.css");

interface AboutProps {
    primary_text: string;
    emphasis_text: string;
    newsletter_text: string;
    disease_catalog_copy: string;
    links: {
        newsletter: {
            url: string;
            text: string;
        };
        disease_catalog: {
            url: string;
            text: string;
        };
    };
}

const processTextWithLinks = (
    text: string,
    links: Record<string, { text: string; url: string }>
) => {
    let processedText = text;

    Object.entries(links).forEach(([key, link]) => {
        processedText = processedText.replace(
            link.text,
            `<a href="${link.url}">${link.text}</a>`
        );
    });
    return <div dangerouslySetInnerHTML={{ __html: processedText }} />;
};

const processTextWithEmphasis = (text: string, emphasis: string) => {
    let processedText = text;
    processedText = processedText.replace(
        emphasis,
        `<span class="${italic}">${emphasis}</span>`
    );
    return <div dangerouslySetInnerHTML={{ __html: processedText }} />;
};

const About: React.FC<AboutProps> = ({
    primary_text,
    emphasis_text,
    newsletter_text,
    disease_catalog_copy,
    links,
}) => {
    const primaryText = processTextWithEmphasis(primary_text, emphasis_text);
    const newsletterText = processTextWithLinks(newsletter_text, {
        newsletter: links.newsletter,
    });
    const diseaseCatalogCopy = processTextWithLinks(disease_catalog_copy, {
        disease_catalog: links.disease_catalog,
    });
    return (
        <div className={container}>
            <div className={firstBlock}>
                <div>{primaryText}</div>
                <div>{newsletterText}</div>
            </div>
            <div className={diseaseCopy}>{diseaseCatalogCopy}</div>
        </div>
    );
};

export default About;
