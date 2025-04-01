import React from "react";
import { graphql, Link } from "gatsby";
import { Divider, Flex } from "antd";

import Layout from "../components/Layout";
import { DiseaseCellLineFrontmatter } from "../component-queries/types";
import { DefaultButton } from "../components/shared/Buttons";
import ImagesAndVideos from "../components/ImagesAndVideos";
import CellLineInfoCard from "../components/CellLineInfoCard";
import SubpageTabs from "../components/SubPage/SubpageTabs";
import { DEFAULT_TABS, TABS_WITH_STEM_CELL } from "../constants";
import { Disease } from "../types";
import { unpackDiseaseFrontmatterForSubpage } from "../components/SubPage/convert-data";
import { UnpackedDiseaseCellLineFull } from "../components/SubPage/types";

const {
    container,
    leftCard,
    returnArrow,
} = require("../style/disease-cell-line.module.css");

const Arrow = require("../img/arrow.svg");

interface DiseaseCellLineTemplateProps extends UnpackedDiseaseCellLineFull {
    href: string;
}

// eslint-disable-next-line
export const DiseaseCellLineTemplate = ({
    href,
    cellLineId,
    parentalLineGene,
    geneName,
    geneSymbol,
    clones,
    snp,
    orderLink,
    certificateOfAnalysis,
    parentalLine,
    healthCertificate,
    imagesAndVideos,
    diseaseName,
    editingDesign,
    genomicCharacterization,
    stemCellCharData,
}: DiseaseCellLineTemplateProps) => {
    const hasImagesOrVideos =
        (imagesAndVideos?.images?.length || 0) > 0 ||
        (imagesAndVideos?.videos?.length || 0) > 0;
    return (
        <>
            <Flex className={container} gap={40} justify="space-between">
                <Flex vertical gap={16} className={leftCard}>
                    <Link to="/disease-catalog">
                        <DefaultButton>
                            <Arrow className={returnArrow} />
                            Return to Cell Catalog
                        </DefaultButton>
                    </Link>
                    <CellLineInfoCard
                        href={href}
                        cellLineId={cellLineId}
                        parentLineGene={parentalLineGene}
                        geneName={geneName}
                        geneSymbol={geneSymbol}
                        clones={clones}
                        snp={snp}
                        orderLink={orderLink}
                        certificateOfAnalysis={certificateOfAnalysis}
                        parentalLine={parentalLine}
                        healthCertificate={healthCertificate}
                    />
                </Flex>
                {hasImagesOrVideos && (
                    <ImagesAndVideos
                        cellLineId={cellLineId}
                        fluorescentTag={[parentalLine.fluorescent_tag[0]]}
                        parentalGeneSymbol={
                            parentalLine.gene[0].frontmatter.symbol
                        }
                        alleleTag={parentalLine.allele_count}
                        parentalLine={parentalLine}
                        geneSymbol={geneSymbol}
                        snp={snp}
                        images={imagesAndVideos.images}
                    />
                )}
            </Flex>
            <Divider />
            <SubpageTabs
                editingDesignData={editingDesign}
                genomicCharacterizationData={genomicCharacterization}
                stemCellCharData={stemCellCharData}
                tabsToRender={
                    diseaseName === Disease.Cardiomyopathy
                        ? TABS_WITH_STEM_CELL
                        : DEFAULT_TABS
                }
            />
        </>
    );
};

const CellLine = ({ data, location }: QueryResult) => {
    const { markdownRemark: cellLine } = data;

    const unpackedCellLine = unpackDiseaseFrontmatterForSubpage(cellLine);
    return (
        <Layout>
            <DiseaseCellLineTemplate
                href={location.href || ""}
                {...unpackedCellLine}
            />
        </Layout>
    );
};

interface QueryResult {
    location: Location;
    data: {
        markdownRemark: {
            id: string;
            fields: {
                slug: string;
            };
            frontmatter: DiseaseCellLineFrontmatter;
        };
    };
}

export default CellLine;

export const pageQuery = graphql`
    query DiseaseCellLineByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                cell_line_id
                parental_line {
                    frontmatter {
                        cell_line_id
                        clone_number
                        allele_count
                        tag_location
                        fluorescent_tag
                        thumbnail_image {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    layout: FIXED
                                )
                            }
                        }
                        gene {
                            frontmatter {
                                symbol
                                name
                            }
                        }
                    }
                }
                disease {
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
                snp
                clones {
                    clone_number
                    type
                    transfection_replicate
                    genotype
                    positive_cells
                }
                certificate_of_analysis
                order_link
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
                editing_design {
                    crna_target_site
                    dna_donor_sequence {
                        sequence
                        type
                    }
                    cas9
                    f_primer
                    r_primer
                    diagrams {
                        title
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
                genomic_characterization {
                    diagrams {
                        title
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
            }
        }
    }
`;
