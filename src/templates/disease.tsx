import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GeneFrontMatter } from "../component-queries/types";

interface DiseaseTemplateProps {
    name: string;
    gene: {
        frontmatter: GeneFrontMatter;
    }[];
}
export const DiseaseTemplate = ({ name, gene }: DiseaseTemplateProps) => {
    return (
        <section className="section">
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <p>Name: {name}</p>
                        {gene.map((geneItem, index) => (
                            <p key={index}>Gene: {geneItem.frontmatter.symbol} - {geneItem.frontmatter.name}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Disease = ({ data }: any) => {
    const { markdownRemark: cellLine } = data;
    return (
        <Layout>
            <DiseaseTemplate
                name={cellLine.frontmatter.name}
                gene={cellLine.frontmatter.gene}
            />
        </Layout>
    );
};

export default Disease;

export const pageQuery = graphql`
    query DiseaseByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                name
                gene {
                    frontmatter {
                        symbol
                        name
                    }
                }
            }
        }
    }
`;
