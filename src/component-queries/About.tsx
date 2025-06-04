import React from "react";
import { StaticQuery, graphql } from "gatsby";

const {
    container,
    section,
    italic,
    firstBlock,
    diseaseCopy,
    primaryText,
} = require("../style/about.module.css");

interface AboutProps {
    markdownRemark: {
        frontmatter: {
            about_block: {
                primary: string;
                emphasis: string;
                newsletter: string;
                disease: string;
                links: {
                    newsletter: { url: string; text: string };
                    disease: { url: string; text: string };
                };
            };
        };
    };
}

const About: React.FC = () => {
    return (
        <StaticQuery
            query={graphql`
                query AboutQuery {
                    markdownRemark(
                        frontmatter: { templateKey: { eq: "normal-catalog" } }
                    ) {
                        frontmatter {
                            about_block {
                                primary
                                emphasis
                                newsletter
                                disease
                                links {
                                    newsletter {
                                        text
                                        url
                                    }
                                    disease {
                                        text
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={(data: AboutProps) => {
                const {
                    about_block
                } = data.markdownRemark.frontmatter;

                /**
                 * Helper function to add links or emphasis to text.
                 * @param text text to process
                 * @param find string to find in the text
                 * @param replace html string to replace the find string with
                 * @returns
                 */
                const processText = (
                    text: string,
                    find: string,
                    replace: string
                ) => {
                    let processed = text;
                    processed = processed.replace(find, replace);
                    return (
                        <div dangerouslySetInnerHTML={{ __html: processed }} />
                    );
                };

                const primaryTextWithEmphasis = processText(
                    about_block.primary,
                    about_block.emphasis,
                    `<span class="${italic}">${about_block.emphasis}</span>`
                );
                const newsletterTextWithLink = processText(
                    about_block.newsletter,
                    about_block.links.newsletter.text,
                    `<a href="${about_block.links.newsletter.url}">${about_block.links.newsletter.text}</a>`
                );
                const diseaseCopyWithLink = processText(
                    about_block.disease,
                    about_block.links.disease.text,
                    `<a href="${about_block.links.disease.url}">${about_block.links.disease.text}</a>`
                );

                return (
                    <div className={container}>
                        <div className={section}>
                            <div className={firstBlock}>
                                <div className={primaryText}>
                                    <h1> About the collection </h1>
                                    <div>{primaryTextWithEmphasis}</div>
                                </div>
                                <div>{newsletterTextWithLink}</div>
                            </div>
                            <div className={diseaseCopy}>
                                {diseaseCopyWithLink}
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default About;
