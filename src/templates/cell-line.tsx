import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GeneticModification } from "../component-queries/types";

const { container, section } = require("../style/cell-line.module.css");

interface QueryResult {
    data: {
        markdownRemark: {
            frontmatter: {
                cell_line_id: string;
                clone_number: number;
                gene: string[];
                genetic_modifications?: GeneticModification[];
                status: string;
                thumbnail_image: any;
            };
        };
    };
}

interface CellLineProps {
    cellLineId: string;
    cloneNumber: number;
    geneticModifications?: GeneticModification[];
    status: string;
    thumbnail: any;
}

// eslint-disable-next-line
export const CellLineTemplate = ({
    cellLineId,
    cloneNumber,
    geneticModifications,
    status,
    thumbnail,
}: CellLineProps) => {
    const image = getImage(thumbnail);
    return (
        <div className={container}>
            <div className={section}>
                <h1>AICS-{cellLineId}</h1>
                <p>Clone Number: {cloneNumber}</p>
                <p>
                    Gene:{" "}
                    {geneticModifications
                        ?.map((mod) => mod.gene?.frontmatter?.symbol)
                        .join(" / ")}
                </p>
                <p>
                    Tag:{" "}
                    {geneticModifications
                        ?.map((mod) => mod.tag_location)
                        .join(" / ")}
                </p>
                <p>Status: {status}</p>
            </div>
            <div className={section}>
                <h1>Images</h1>
                <p>Thumbnail:</p>
                {image && (
                    <GatsbyImage image={image} alt="Cell Line Thumbnail" />
                )}
            </div>
        </div>
    );
};

const CellLine = ({ data }: QueryResult) => {
    const { markdownRemark: cellLine } = data;
    return (
        <Layout>
            <CellLineTemplate
                cellLineId={cellLine.frontmatter.cell_line_id}
                cloneNumber={cellLine.frontmatter.clone_number}
                geneticModifications={
                    cellLine.frontmatter.genetic_modifications
                }
                status={cellLine.frontmatter.status}
                thumbnail={cellLine.frontmatter.thumbnail_image}
            />
        </Layout>
    );
};

export default CellLine;

export const pageQuery = graphql`
    query CellLineByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            frontmatter {
                cell_line_id
                clone_number
                genetic_modifications {
                    gene {
                        frontmatter {
                            symbol
                            name
                        }
                    }
                    tag_location
                }
                status
                thumbnail_image {
                    childImageSharp {
                        gatsbyImageData(width: 200, placeholder: BLURRED)
                    }
                }
            }
        }
    }
`;
