import React from "react";
import { Card, Divider, Flex } from "antd";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Content, { HTMLContent } from "../components/shared/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import NormalCellLines from "../component-queries/NormalCellLines";

const {
    container,
    coriellCard,
    header,
    mainHeading,
    coriellWrapper,
} = require("../style/catalog.module.css");
interface NormalCatalogTemplateProps {
    title: string;
    content: string;
    contentComponent?: JSX.ElementType;
    fundingText: string;
    acknowledgementsBlock: {
        intro: string;
        contributors: { name: string; institution: string }[];
        outro: string;
    };
    main: {
        heading: string;
        description: string;
        subheading: string;
    };
    coriellImage: FileNode;
    coriellLink: string;
}
// eslint-disable-next-line
export const NormalCatalogTemplate = ({
    title,
    content,
    contentComponent,
    fundingText,
    acknowledgementsBlock,
    main,
    coriellImage,
    coriellLink,
}: NormalCatalogTemplateProps) => {
    const image = getImage(coriellImage);
    const PageContent = contentComponent || Content;
    return (
        <section className={container}>
            <h1>{title}</h1>
            <Flex className={header}>
                <PageContent className="content" content={content} />
                <Divider
                    type="vertical"
                    style={{ height: "initial", marginInline: "20px" }}
                />
                <div className={coriellWrapper}>
                    {image && (
                        <a href={coriellLink} target="_blank" rel="noreferrer">
                            <Card
                                bordered={true}
                                className={coriellCard}
                                title="View Allen Cell Collection on"
                                cover={
                                    <GatsbyImage image={image} alt="Coriell" />
                                }
                            ></Card>
                        </a>
                    )}
                </div>
            </Flex>
            <h2 className={mainHeading}>{main.heading}</h2>
            <NormalCellLines />
            <Footer
                acknowledgementsBlock={acknowledgementsBlock}
                fundingText={fundingText}
            />
        </section>
    );
};
// TODO: remove `main` content from the template and the query
interface QueryResult {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                title: string;
                funding_text: {
                    html: string;
                };
                acknowledgements_block: {
                    intro: string;
                    contributors: { name: string; institution: string }[];
                    outro: string;
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

const NormalCatalog = ({ data }: QueryResult) => {
    const { markdownRemark: post } = data;
    return (
        <Layout>
            <NormalCatalogTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
                fundingText={post.frontmatter.funding_text.html}
                acknowledgementsBlock={post.frontmatter.acknowledgements_block}
                main={post.frontmatter.main}
                coriellImage={post.frontmatter.coriell_image}
                coriellLink={post.frontmatter.coriell_link}
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
                acknowledgements_block {
                    intro
                    contributors {
                        name
                        institution
                    }
                    outro
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
