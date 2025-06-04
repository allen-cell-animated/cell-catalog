import React from "react";
import { Card, Divider, Flex } from "antd";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Content, { HTMLContent } from "../components/shared/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import NormalCellLines from "../component-queries/NormalCellLines";
import About from "../components/About";

const {
    container,
    coriellCard,
    header,
    coriellWrapper,
    mainHeading,
    buttonContainer,
} = require("../style/catalog.module.css");
interface NormalCatalogTemplateProps {
    title: string;
    aboutBlock: {
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
    };
    content: string;
    contentComponent?: JSX.ElementType;
    fundingText: string;
    acknowledgementsBlock: {
        intro: string;
        contributors: { name: string; institution: string }[];
        outro: string;
    };
    coriellImage: FileNode;
    coriellLink: string;
    learnImage: FileNode;
    learnLink: string;
    addGeneImage: FileNode;
    addGeneLink: string;
    tableHeader: string;
}
// eslint-disable-next-line
export const NormalCatalogTemplate = ({
    title,
    content,
    contentComponent,
    fundingText,
    acknowledgementsBlock,
    coriellImage,
    coriellLink,
    learnImage,
    learnLink,
    addGeneImage,
    addGeneLink,
    aboutBlock,
    tableHeader,
}: NormalCatalogTemplateProps) => {
    const coriellImageRetrieved = getImage(coriellImage);
    const learnImageRetrieved = getImage(learnImage);
    const addGeneImageRetrieved = getImage(addGeneImage);
    const PageContent = contentComponent || Content;
    return (
        <section className={container}>
            <h1>{title}</h1>
            <Flex className={header}>
                <PageContent className="content" content={content} />
                <About {...aboutBlock} />
                <Divider
                    type="vertical"
                    style={{ height: "initial", marginInline: "20px" }}
                />
                <div className={buttonContainer}>
                    <div className={coriellWrapper}>
                        {learnImageRetrieved && (
                            <a
                                href={learnLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Card
                                    bordered={true}
                                    className={coriellCard}
                                    title="Learn about our collection"
                                    cover={
                                        <GatsbyImage
                                            image={learnImageRetrieved}
                                            alt="Coriell"
                                        />
                                    }
                                ></Card>
                            </a>
                        )}
                    </div>
                    <div className={coriellWrapper}>
                        {coriellImageRetrieved && (
                            <a
                                href={coriellLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Card
                                    bordered={true}
                                    className={coriellCard}
                                    title="View Allen Cell Collection on"
                                    cover={
                                        <GatsbyImage
                                            image={coriellImageRetrieved}
                                            alt="Coriell"
                                        />
                                    }
                                ></Card>
                            </a>
                        )}
                    </div>
                    <div className={coriellWrapper}></div>
                    {addGeneImageRetrieved && (
                        <a href={addGeneLink} target="_blank" rel="noreferrer">
                            <Card
                                bordered={true}
                                className={coriellCard}
                                title="View Plasmid Collection on"
                                cover={
                                    <GatsbyImage
                                        image={addGeneImageRetrieved}
                                        alt="Coriell"
                                    />
                                }
                            ></Card>
                        </a>
                    )}
                </div>
            </Flex>
            <h2 className={mainHeading}>{tableHeader}</h2>
            <NormalCellLines />
            <Footer
                acknowledgementsBlock={acknowledgementsBlock}
                fundingText={fundingText}
            />
        </section>
    );
};

interface QueryResult {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                title: string;
                footer_text: {
                    html: string;
                };
                about_block: {
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
                };
                funding_text: {
                    html: string;
                };
                acknowledgements_block: {
                    intro: string;
                    contributors: { name: string; institution: string }[];
                    outro: string;
                };
                coriell_image: FileNode;
                coriell_link: string;
                learn_image: FileNode;
                learn_link: string;
                addgene_image: FileNode;
                addgene_link: string;
                table_header: string;
            };
        };
    };
}

const NormalCatalog = ({ data }: QueryResult) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <NormalCatalogTemplate
                contentComponent={HTMLContent}
                aboutBlock={post.frontmatter.about_block}
                title={post.frontmatter.title}
                content={post.html}
                fundingText={post.frontmatter.funding_text.html}
                acknowledgementsBlock={post.frontmatter.acknowledgements_block}
                coriellImage={post.frontmatter.coriell_image}
                coriellLink={post.frontmatter.coriell_link}
                learnImage={post.frontmatter.learn_image}
                learnLink={post.frontmatter.learn_link}
                addGeneImage={post.frontmatter.addgene_image}
                addGeneLink={post.frontmatter.addgene_link}
                tableHeader={post.frontmatter.table_header}
            />
        </Layout>
    );
};

export default NormalCatalog;

export const aboutPageQuery = graphql`
    query NormalCatalog($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                funding_text {
                    html
                }
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
                table_header
                acknowledgements_block {
                    intro
                    contributors {
                        name
                        institution
                    }
                    outro
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
                            width: 190
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
`;
