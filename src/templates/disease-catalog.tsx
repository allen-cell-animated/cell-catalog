import React from "react";
import { Card, Divider, Flex } from "antd";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Diseases from "../component-queries/Diseases";
import Content, { HTMLContent } from "../components/shared/Content";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import Footer from "../components/Footer";
import AboutButton from "../components/AboutButton";

const {
    banner,
    bannerContent,
    header,
    mainHeading,
} = require("../style/catalog.module.css");

interface DiseaseCatalogTemplateProps {
    title: string;
    content: string;
    contentComponent?: JSX.ElementType;
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
    title,
    content,
    contentComponent,
    footerText,
    fundingText,
    acknowledgementsBlock,
    main,
    coriellImage,
    coriellLink,
}: DiseaseCatalogTemplateProps) => {
    const PageContent = contentComponent || Content;
    return (
        <section>
            <h1>{title}</h1>
            <Flex className={header}>
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
            <h2 className={mainHeading}>{main.heading}</h2>
            <Card className={banner} bordered={true}>
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
