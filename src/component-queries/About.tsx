import React from "react";
import classNames from "classnames";
import { YoutubeFilled } from "@ant-design/icons";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { StaticQuery, graphql } from "gatsby";
import AboutButton from "../components/AboutButton";

const {
    container,
    section,
    italic,
    firstBlock,
    diseaseCopy,
    buttonContainer,
    aboutCard,
    iconOverlay,
    imageContainer,
    imageWrapper,
    playButton,
    stackedIcon,
    learnCard,
    primaryText,
    addgeneCard,
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
            coriell_image: FileNode;
            coriell_link: string;
            learn_image: FileNode;
            learn_link: string;
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
                            learn_image {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        layout: FIXED
                                        width: 250
                                    )
                                }
                            }
                            learn_link
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
                    learn_image,
                    learn_link,
                    addgene_image,
                    addgene_link,
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

                const learnImageRetrieved = getImage(
                    learn_image
                ) as IGatsbyImageData;

                const learnImageWithYoutubeIcon = learnImageRetrieved && (
                    <div className={imageContainer}>
                        <div className={imageWrapper}>
                            <GatsbyImage
                                image={learnImageRetrieved}
                                alt="Learn about our collection"
                            />
                        </div>
                        <div className={iconOverlay}>
                            <div className={stackedIcon}>
                                <YoutubeFilled />
                                <div className={playButton}></div>
                            </div>
                        </div>
                    </div>
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
                        <div className={buttonContainer}>
                            <AboutButton
                                image={learnImageWithYoutubeIcon}
                                link={learn_link}
                                title="Learn about our collection"
                                className={classNames(aboutCard, learnCard)}
                            />
                            <AboutButton
                                image={coriell_image}
                                link={coriell_link}
                                title="View Allen Cell Collection on"
                                className={aboutCard}
                            />
                            <AboutButton
                                image={addgene_image}
                                link={addgene_link}
                                title="View Plasmid Collection on"
                                className={classNames(aboutCard, addgeneCard)}
                            />
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default About;
