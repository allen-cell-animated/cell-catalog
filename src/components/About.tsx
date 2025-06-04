import React from "react";

const { container, italic, firstBlock, diseaseCopy } = require("../style/about.module.css");

interface AboutProps {
    primary: string;
    emphasis: string;
    newsletter: string;
    disease: string;
    links: {
        newsletter: {
            url: string;
            text: string;
        };
        disease: {
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
    primary,
    emphasis,
    newsletter,
    disease,
    links,
}) => {
    const primaryTextWithEmphasis = processTextWithEmphasis(primary, emphasis);
    const newsletterText = processTextWithLinks(newsletter, {
        newsletter: links.newsletter,
    });
    const diseaseCatalogCopy = processTextWithLinks(disease, {
        disease_catalog: links.disease,
    });
    return (
        <div className={container}>
            <div className={firstBlock}>
                <div>{primaryTextWithEmphasis}</div>
                <div>{newsletterText}</div>
            </div>
            <div className={diseaseCopy}>{diseaseCatalogCopy}</div>
        </div>
    );
};

export default About;
