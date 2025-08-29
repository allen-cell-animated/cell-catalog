import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
    NormalCellLineFrontmatter,
} from "../component-queries/types";
import { NormalCellLineInfoCard } from "../components/CellLineInfoCard/NormalCellLineInfoCard";
import { DefaultButton } from "../components/shared/Buttons";
import SubpageTabs from "../components/SubPage/SubpageTabs";
import { TABS_WITH_STEM_CELL } from "../constants";
import { unpackNormalFrontMatterForSubpage } from "../components/SubPage/convert-data";
import { UnpackedNormalCellLineFull } from "../components/SubPage/types";

const {
    container,
    imagesContainer,
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

interface CellLineProps extends UnpackedNormalCellLineFull {
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
    fluorescentTag,
    alleleCount,
    editingDesign,
    genomicCharacterization,
}: CellLineProps) => {
    const image = thumbnailImage ? getImage(thumbnailImage) : undefined;
    if (cellLineId === 0) {
        return null;
    }
    return (
        <>
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
                <div className={imagesContainer}>
                    {image && (
                        <GatsbyImage image={image} alt="Cell Line Thumbnail" />
                    )}
                </div>
            </div>
            <SubpageTabs
                editingDesignData={editingDesign}
                genomicCharacterizationData={genomicCharacterization}
                stemCellCharData={null}
                tabsToRender={TABS_WITH_STEM_CELL}
            />
        </>
    );
};

const CellLine = ({ data, location }: QueryResult) => {
    const { markdownRemark: cellLine } = data;

    const unpackedCellLine = unpackNormalFrontMatterForSubpage(cellLine);

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
                editing_design {
                    ncbi_isoforms
                    crna
                    linker
                    cas9
                    diagrams {
                        title
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
                }
                genomic_characterization {
                    diagrams {
                        title
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
                    amplified_junctions {
                        edited_gene
                        junction
                        expected_size
                        confirmed_sequence
                    }
                    ddpcr {
                        tag
                        clone
                        fp_ratio
                        plasmid
                    }
                    cr_rna_off_targets {
                        clones_analyzed
                        off_targets_sequenced_per_clone
                        total_sites_sequenced
                        mutations_identified
                    }
                    junction_table_caption
                    ddpcr_caption
                    off_targets_caption
                }
            }
        }
    }
`;
