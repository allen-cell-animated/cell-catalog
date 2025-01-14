import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GeneFrontMatter } from "../component-queries/types";

interface GeneNameTemplateProps extends GeneFrontMatter {}

export const GeneNameTemplate = ({
    name,
    symbol,
    protein,
    structure,
    isoforms,
}: GeneNameTemplateProps) => {
    return (
        <section>
            <h2>{name}</h2>
            <p>
                symbol: <strong>{symbol}</strong>
            </p>
            <p>
                protein: <strong>{protein}</strong>
            </p>
            <p>
                structure: <strong>{structure}</strong>
            </p>
            <div>isoforms:</div>
            {isoforms?.map((isoform) => (
                <div key={isoform.name}>
                    <h4>{isoform.name}</h4>
                    <ul>
                        {isoform.ids?.map((id) => (
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

const GeneName = ({ data }: QueryResult) => {
    const { markdownRemark: geneData } = data;
    return (
        <Layout>
            <GeneNameTemplate
                protein={geneData.frontmatter.protein}
                symbol={geneData.frontmatter.symbol}
                name={geneData.frontmatter.name}
                structure={geneData.frontmatter.structure}
                isoforms={geneData.frontmatter.isoforms}
            />
        </Layout>
    );
};

export default GeneName;

interface QueryResult {
    data: {
        markdownRemark: {
            frontmatter: GeneFrontMatter;
        };
    };
}

export const pageQuery = graphql`
    query GeneNameById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                name
                symbol
                protein
                structure
                isoforms {
                    name
                    ids
                }
            }
        }
    }
`;
