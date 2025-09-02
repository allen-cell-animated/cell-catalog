import React from "react";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { StaticQuery, graphql } from "gatsby";
import AboutButton from "../components/AboutButton";
import { renderRichText, RichText } from "../utils/formattingUtils";

const {
    container,
    section,
    italic,
    firstBlock,
    diseaseCopy,
    buttonContainer,
    primaryText,
    addgeneCard,
} = require("../style/about.module.css");

interface AboutProps {
    markdownRemark: {
        frontmatter: {
            about_block: {
                primary: RichText;
                disease: RichText;
            };
            coriell_image: FileNode;
            coriell_link: string;
            addgene_image: FileNode;
            addgene_link: string;
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
                                primary {
                                    text
                                    emphasis {
                                        text
                                    }
                                    link {
                                        text
                                        url
                                    }
                                }
                                disease {
                                    text
                                    link {
                                        text
                                        url
                                    }
                                }
                            }
                            coriell_image {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        layout: FIXED
                                        width: 190
                                    )
                                }
                            }
                            coriell_link
                            addgene_image {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        layout: FIXED
                                        width: 190
                                    )
                                }
                            }
                            addgene_link
                        }
                    }
                }
            `}
            render={(data: AboutProps) => {
                const {
                    about_block,
                    coriell_image,
                    coriell_link,
                    addgene_image,
                    addgene_link,
                } = data.markdownRemark.frontmatter;

                return (
                    <div className={container}>
                        <div className={section}>
                            <div className={firstBlock}>
                                <div className={primaryText}>
                                    <h1> About the collection </h1>
                                    <div>
                                        {renderRichText(
                                            about_block.primary,
                                            italic
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={diseaseCopy}>
                                {renderRichText(about_block.disease)}
                            </div>
                        </div>
                        <div className={buttonContainer}>
                            <AboutButton
                                image={coriell_image}
                                link={coriell_link}
                                title="View Allen Cell Collection on"
                            />
                            <AboutButton
                                image={addgene_image}
                                link={addgene_link}
                                title="View Plasmid Collection on"
                                className={addgeneCard}
                            />
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default About;
