import React from "react";
import { HTMLContent } from "../shared/Content";

const {
    footer,
    contributorsClass,
    contributor,
    institution,
} = require("../../style/footer.module.css");

interface FooterProps {
    acknowledgementsBlock: {
        intro: string;
        contributors: { name: string; institution: string }[];
        outro: string;
    };
    fundingText: string;
}

const Footer: React.FC<FooterProps> = ({
    acknowledgementsBlock,
    fundingText,
}) => {
    const { intro, contributors, outro } = acknowledgementsBlock;
    return (
        <div className={footer}>
            <div>
                <h3>Acknowledgements</h3>
                <p> {intro} </p>
                {contributors.map((p, i) => (
                    <div className={contributorsClass} key={i}>
                        <span className={contributor}>{p.name}</span>,{" "}
                        <span className={institution}>{p.institution}</span>
                    </div>
                ))}
                <p> {outro} </p>
            </div>
            <div>
                <h3>Funding</h3>
                <HTMLContent content={fundingText} />
            </div>
        </div>
    );
};

export default Footer;
