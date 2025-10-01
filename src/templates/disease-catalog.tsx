import { Card, Divider, Flex } from "antd";
import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";

import Diseases from "../component-queries/Diseases";
import AboutButton from "../components/AboutButton";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/shared/Content";

const {
    banner,
    bannerContent,
    mainHeading,
} = require("../style/catalog.module.css");
const { container, contentWrapper } = require("../style/about.module.css");

interface DiseaseCatalogTemplateProps {
    title: string;
    content: string;
    contentComponent?: React.JSX.ElementType;
    footerText: string;
    fundingText: string;
    acknowledgementsBlock: {
        intro: string;
        collaborators: { name: string; institution: string }[];
        contributor_text: string;
        contributors: { name: string; institution: string }[];
    };
    main: {
        heading: string;
        description: string;
        subheading: string;
    };
    coriellImage: FileNode;
    coriellLink: string;
}

export const DiseaseCatalogTemplate = ({
    acknowledgementsBlock,
    content,
    contentComponent,
    coriellImage,
    coriellLink,
    footerText,
    fundingText,
    main,
    title,
}: DiseaseCatalogTemplateProps) => {
    const PageContent = contentComponent || Content;
    return (
        <section>
            <section className={container}>
                <h1>{title}</h1>
                <Flex className={contentWrapper}>
                    <PageContent className="content" content={content} />
                    <Divider
                        type="vertical"
                        style={{ height: "initial", marginInline: "20px" }}
                    />
                    <AboutButton
                        image={coriellImage}
                        link={coriellLink}
                        title="View Allen Cell Collection on"
                    />
                </Flex>
            </section>
            <h2 className={mainHeading}>{main.heading}</h2>
            <Card className={banner}>
                {main.subheading && <h4>{main.subheading}</h4>}
                <PageContent
                    className={bannerContent}
                    content={main.description}
                />
            </Card>
            <Diseases />
            <Footer
                generationText={footerText}
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
                funding_text: {
                    html: string;
                };
                acknowledgements_block: {
                    intro: string;
                    collaborators: { name: string; institution: string }[];
                    contributor_text: string;
                    contributors: { name: string; institution: string }[];
                };
                main: {
                    heading: string;
                    subheading: string;
                    description: string;
                };
                coriell_image: FileNode;
                coriell_link: string;
            };
        };
    };
}

const DiseaseCatalog = ({ data }: QueryResult) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <DiseaseCatalogTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
                footerText={post.frontmatter.footer_text.html}
                fundingText={post.frontmatter.funding_text.html}
                acknowledgementsBlock={post.frontmatter.acknowledgements_block}
                main={post.frontmatter.main}
                coriellImage={post.frontmatter.coriell_image}
                coriellLink={post.frontmatter.coriell_link}
            />
        </Layout>
    );
};

export default DiseaseCatalog;

export const aboutPageQuery = graphql`
    query DiseaseCatalog($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                footer_text {
                    html
                }
                funding_text {
                    html
                }
                acknowledgements_block {
                    intro
                    collaborators {
                        name
                        institution
                    }
                    contributor_text
                    contributors {
                        name
                        institution
                    }
                }
                main {
                    heading
                    subheading
                    description
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
            }
        }
    }
`;
