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
import ImagesAndVideos from "../components/ImagesAndVideos";

const {
    container,
    section,
    leftCard,
    returnArrow,
} = require("../style/disease-cell-line.module.css");

const Arrow = require("../img/arrow.svg");

interface QueryResult {
    location: Location;
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
    orderPlasmid,
    healthCertificate,
    certificateOfAnalysis,
    orderLink,
    protein,
    fluorescentTag,
    alleleCount,
    imagesAndVideos,
}: CellLineProps) => {
    const image = thumbnailImage ? getImage(thumbnailImage) : undefined;
    const hasImagesOrVideos =
        (imagesAndVideos?.images?.length || 0) > 0 ||
        (imagesAndVideos?.videos?.length || 0) > 0;
    if (cellLineId === 0) {
        return null;
    }
    return (
        <div className={container}>
            <div className={leftCard}>
                <Link to="/normal-catalog">
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
                    orderPlasmid={orderPlasmid}
                    healthCertificate={healthCertificate}
                    cloneNumber={cloneNumber}
                    taggedGene={taggedGene}
                    fluorescentTag={fluorescentTag}
                    alleleCount={alleleCount}
                />
            </div>
            <div className={section}>
                {hasImagesOrVideos && (
                    <ImagesAndVideos
                        cellLineId={cellLineId}
                        geneSymbol={taggedGene?.[0]?.symbol || ""}
                        fluorescentTag={fluorescentTag?.[0] || ""}
                        alleleTag={alleleCount?.[0] || ""}
                        images={imagesAndVideos?.images || []}
                        videos={imagesAndVideos?.videos || []}
                    />
                )}
            </div>
        </div>
    );
};

const CellLine = ({ data, location }: QueryResult) => {
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
                donor_plasmid
                parental_line {
                    frontmatter {
                        name
                    }
                }
                clone_number
                genetic_modifications {
                    gene {
                        frontmatter {
                            symbol
                            name
                            protein
                            structure
                        }
                    }
                    tag_location
                    fluorescent_tag
                    allele_count
                }
                status
                images_and_videos {
                    images {
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    layout: CONSTRAINED
                                )
                            }
                        }
                        caption
                    }
                }
                images_and_videos {
                    images {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 400, placeholder: BLURRED)
                            }
                        }
                        caption
                    }
                    videos {
                        video 
                        caption
                    }
                }
            }
        }
    }
`;
