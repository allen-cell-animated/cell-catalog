import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    NormalCellLineFrontmatter,
    UnpackedNormalCellLine,
} from "../component-queries/types";
import { convertFrontmatterToNormalCellLines } from "../component-queries/convert-data";
import { NormalCellLineInfoCard } from "../components/CellLineInfoCard/NormalCellLineInfoCard";
import { DefaultButton } from "../components/shared/Buttons";

const {
    container,
    section,
    leftCard,
    returnArrow,
} = require("../style/cell-line.module.css");

const Arrow = require("../img/arrow.svg");

interface QueryResult {
    data: {
        markdownRemark: {
            id: string;
            key: string;
            fields: {
                slug: string;
            };
            frontmatter: NormalCellLineFrontmatter;
        };
    };
}

interface CellLineProps extends UnpackedNormalCellLine {
    href: string;
}

// eslint-disable-next-line
export const CellLineTemplate = ({
    cellLineId,
    cloneNumber,
    tagLocation,
    taggedGene,
    status,
    thumbnailImage,
    href,
    parentalLine,
    healthCertificate,
    certificateOfAnalysis,
    orderLink,
}: CellLineProps) => {
    const image = thumbnailImage ? getImage(thumbnailImage) : undefined;
    return (
        <div className={container}>
            <div className={leftCard}>
                <Link to="/disease-catalog">
                    <DefaultButton>
                        <Arrow className={returnArrow} />
                        Return to Cell Catalog
                    </DefaultButton>
                </Link>
                <NormalCellLineInfoCard
                    href={href}
                    cellLineId={cellLineId}
                    geneName={taggedGene[0].name}
                    geneSymbol={taggedGene[0].symbol}
                    orderLink={orderLink}
                    certificateOfAnalysis={certificateOfAnalysis}
                    parentalLine={parentalLine}
                    healthCertificate={healthCertificate}
                    cloneNumber={cloneNumber}
                />
            </div>
            <div className={section}>
                <p>Tag: {tagLocation.join(" / ")}</p>
                <p>Status: {status}</p>
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

    const unpackedCellLine = convertFrontmatterToNormalCellLines({
        node: cellLine,
    });

    return (
        <Layout>
            <CellLineTemplate
                href={location.href || ""}
                {...unpackedCellLine}
            />
        </Layout>
    );
};

export default CellLine;

export const pageQuery = graphql`
    query CellLineByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                cell_line_id
                certificate_of_analysis
                eu_hpsc_reg
                parental_line {
                    frontmatter {
                        cell_line_id
                        clone_number
                        thumbnail_image {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    layout: FIXED
                                )
                            }
                        }
                        genetic_modifications {
                            gene {
                                frontmatter {
                                    symbol
                                    name
                                }
                            }
                            allele_count
                            tag_location
                            fluorescent_tag
                        }
                    }
                }
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
