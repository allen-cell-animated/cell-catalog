import React from "react";
import { HTMLContent } from "./shared/Content";
import { Divider } from "antd";
const {
    container,
    collaboratorsSection,
    contributor,
    institution,
    generation,
} = require("../style/footer.module.css");

interface FooterProps {
    generationText?: string;
    acknowledgementsBlock: {
        intro: string;
        collaborators?: { name: string; institution: string }[];
        contributor_text?: string;
        contributors: { name: string; institution: string }[];
    };
    fundingText: string;
}

const Footer: React.FC<FooterProps> = ({
    generationText,
    acknowledgementsBlock,
    fundingText,
}) => {
    const { intro, collaborators, contributor_text, contributors } =
        acknowledgementsBlock;

    return (
        <>
            {generationText && (
                <div>
                    <HTMLContent
                        className={generation}
                        content={generationText}
                    />
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
                    <HTMLContent content={fundingText} />
                </div>
            </div>
        </>
    );
};

export default Footer;
