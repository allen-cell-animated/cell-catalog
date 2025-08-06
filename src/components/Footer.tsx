import React from "react";
import { Divider } from "antd";
import { TextWithUrls } from "../types";

const {
    container,
    collaboratorsSection,
    contributor,
    institution,
    generation,
} = require("../style/footer.module.css");

interface FooterProps {
    generationText?: TextWithUrls[];
    acknowledgementsBlock: {
        intro: string;
        collaborators?: { name: string; institution: string }[];
        contributor_text?: string;
        contributors: { name: string; institution: string }[];
    };
    fundingText: string[];
}

const Footer: React.FC<FooterProps> = ({
    generationText,
    acknowledgementsBlock,
    fundingText,
}) => {
    const { intro, collaborators, contributor_text, contributors } =
        acknowledgementsBlock;

    const getTextWithUrls = (
        item: { text: string; url?: string },
        key: string
    ) => {
        return item.url ? (
            <a
                key={key}
                href={item.text}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.text}
            </a>
        ) : (
            <span key={key}>{item.text}</span>
        );
    };

    return (
        <>
            {generationText && (
                <div className={generation}>
                    {generationText.map((item, i) =>
                        getTextWithUrls(item, `${i}`)
                    )}
                    <Divider />
                </div>
            )}
            <div className={container}>
                <div>
                    <h3>Acknowledgements</h3>
                    <p>{intro}</p>
                    {collaborators && (
                        <div className={collaboratorsSection}>
                            {collaborators.map((p, i) => (
                                <div key={`collaborator-${i}`}>
                                    <span className={contributor}>
                                        {p.name}
                                    </span>
                                    ,{" "}
                                    <span className={institution}>
                                        {p.institution}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                    {contributor_text && <p>{contributor_text}</p>}
                    {contributors.map((p, i) => (
                        <div key={`contributor-${i}`}>
                            <span className={contributor}>{p.name}</span>,{" "}
                            <span className={institution}>{p.institution}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Funding</h3>
                    {fundingText.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Footer;
