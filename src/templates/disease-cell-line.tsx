import React from "react";
import { graphql, Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Divider, Flex } from "antd";

import Layout from "../components/Layout";
import {
    Clone,
    DiseaseCellLineFrontmatter,
    GeneFrontMatter,
    ParentalLineFrontmatter,
} from "../component-queries/types";
import { DefaultButton } from "../components/shared/Buttons";
import ImagesAndVideos from "../components/ImagesAndVideos";
import CellLineInfoCard from "../components/CellLineInfoCard";
import SubpageTabs from "../components/SubpageTabs";
import { DEFAULT_TABS, TABS_WITH_STEM_CELL } from "../constants";
import { Disease } from "../types";

const {
    container,
    leftCard,
    returnArrow,
} = require("../style/disease-cell-line.module.css");

const Arrow = require("../img/arrow.svg");

export interface EditingDesignDiagrams {
    title: string;
    image: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    caption: string;
}
export interface EditingDesign {
    crna_target_site: string;
    dna_donor_sequence: string;
    cas9: string;
    f_primer: string;
    r_primer: string;
    diagrams: EditingDesignDiagrams[];
}

interface DiseaseCellLineTemplateProps {
    href: string;
    cellLineId: number;
    geneName: string;
    geneSymbol: string;
    status: string;
    snp: string;
    orderLink: string;
    certificateOfAnalysis: string;
    parentalLine: ParentalLineFrontmatter;
    parentLineGene: GeneFrontMatter;
    clones: Clone[];
    healthCertificate: string;
    imagesAndVideos: any;
    diseaseName: string;
    editingDesign: EditingDesign;
}

// eslint-disable-next-line
export const DiseaseCellLineTemplate = ({
    href,
    cellLineId,
    parentLineGene,
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
                        parentLineGene={parentLineGene}
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
                        fluorescentTag={parentalLine.fluorescent_tag}
                        parentalGeneSymbol={
                            parentalLine.gene.frontmatter.symbol
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
            <SubpageTabs // TODO: request subpage data and send it in here
                editingDesignData={editingDesign}
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
    const parentalLineData = cellLine.frontmatter.parental_line.frontmatter;
    const { name: geneName, symbol: geneSymbol } =
        cellLine.frontmatter.disease.frontmatter.gene.frontmatter;
    const diseaseName = cellLine.frontmatter.disease.frontmatter.name;
    return (
        <Layout>
            <DiseaseCellLineTemplate
                href={location.href || ""}
                diseaseName={diseaseName}
                cellLineId={cellLine.frontmatter.cell_line_id}
                snp={cellLine.frontmatter.snp}
                orderLink={cellLine.frontmatter.order_link}
                certificateOfAnalysis={
                    cellLine.frontmatter.certificate_of_analysis
                }
                geneName={geneName}
                geneSymbol={geneSymbol}
                parentalLine={parentalLineData}
                status={cellLine.frontmatter.status}
                parentLineGene={parentalLineData.gene.frontmatter}
                clones={cellLine.frontmatter.clones}
                healthCertificate={
                    cellLine.frontmatter.hPSCreg_certificate_link
                }
                imagesAndVideos={cellLine.frontmatter.images_and_videos}
                editingDesign={cellLine.frontmatter.editing_design}
            />
        </Layout>
    );
};

interface QueryResult {
    location: Location;
    data: {
        markdownRemark: { frontmatter: DiseaseCellLineFrontmatter };
    };
}

export default CellLine;

export const pageQuery = graphql`
    query DiseaseCellLineByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
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
                    dna_donor_sequence
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
            }
        }
    }
`;
