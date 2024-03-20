import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import CellLineTable from "../component-queries/NormalCellLines";

interface IndexPageTemplateProps {
    mainPitch: {
        title: string;
        description: string;
    };
    products: {
        text: string;
        image: string;
    }[];
}

export const IndexPageTemplate = ({
    mainPitch,
    products,
}: IndexPageTemplateProps) => {
    return (
        <div>
            <section className="">
                <h1 className="title">{mainPitch.title}</h1>
                <div className="tile">
                    <h3 className="subtitle">{mainPitch.description}</h3>
                </div>
                <Features gridItems={products} />
                <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                        Cell Lines
                    </h3>
                    <CellLineTable />
                </div>
            </section>
        </div>
    );
};

const IndexPage = ({ data }: QueryResult) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                mainPitch={frontmatter.main_pitch}
                products={frontmatter.products}
            />
        </Layout>
    );
};

export default IndexPage;

interface QueryResult {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
                subtitle: string;
                main_pitch: {
                    title: string;
                    description: string;
                };
                products: {
                    text: string;
                    image: string;
                }[];
            };
        };
    };
}

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                subtitle
                main_pitch {
                    title
                    description
                }
                products {
                    text
                    image
                }
            }
        }
    }
`;
