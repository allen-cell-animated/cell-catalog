import React from "react";
import { graphql, StaticQuery } from "gatsby";

import {
    CellLineStatus,
    NormalCellLineNode,
    UnpackedNormalCellLine,
} from "./types";
import { convertFrontmatterToNormalCellLines } from "./convert-data";
import CellLineTable from "../components/CellLineTable";
import { getNormalTableColumns } from "../components/CellLineTable/NormalTableColumns";
import { PHONE_BREAKPOINT } from "../constants";
import useWindowWidth from "../hooks/useWindowWidth";
import { getNormalTableMobileConfig } from "../components/CellLineTable/MobileView";
import SearchAndFilter from "./SearchAndFilter";

const CellLineTableTemplate = (props: QueryResult) => {
    const { edges: cellLines } = props.data.allMarkdownRemark;
    const inProgressCellLines = [] as UnpackedNormalCellLine[];
    const finishedCellLines = [] as UnpackedNormalCellLine[];
    cellLines.forEach((cellLine) => {
        const unPackedCellLine = convertFrontmatterToNormalCellLines(cellLine);
        if (unPackedCellLine.status === CellLineStatus.InProgress) {
            inProgressCellLines.push(unPackedCellLine);
        } else {
            finishedCellLines.push(unPackedCellLine);
        }
    });
    const width = useWindowWidth();
    const isPhone = width < PHONE_BREAKPOINT;
    const [filteredCellLines, setFilteredCellLines] =
        React.useState(finishedCellLines);
    return (
        <>
            <SearchAndFilter
                allCellLines={finishedCellLines}
                setResults={setFilteredCellLines}
            />
            <CellLineTable
                tableName="Cell Line Catalog"
                cellLines={filteredCellLines}
                released={true}
                columns={getNormalTableColumns(false)}
                mobileConfig={getNormalTableMobileConfig(isPhone)}
            />
            <CellLineTable
                tableName="Cell Line Catalog"
                cellLines={inProgressCellLines}
                released={false}
                columns={getNormalTableColumns(true)}
                mobileConfig={getNormalTableMobileConfig(isPhone)}
            />
        </>
    );
};

interface QueryResult {
    data: {
        allMarkdownRemark: {
            edges: {
                node: NormalCellLineNode;
            }[];
        };
    };
}
export default function NormalCellLines() {
    // query filters out the original cell line, WTC (cell_line_id: 0)
    // and any cell lines that are marked as hidden
    return (
        <StaticQuery
            query={graphql`
                query CellLineTableQuery {
                    allMarkdownRemark(
                        sort: { frontmatter: { cell_line_id: ASC } }
                        filter: {
                            frontmatter: {
                                templateKey: { eq: "cell-line" }
                                cell_line_id: { ne: 0 }
                                status: { ne: "hide" }
                            }
                        }
                    ) {
                        edges {
                            node {
                                excerpt(pruneLength: 400)
                                id
                                fields {
                                    slug
                                }
                                frontmatter {
                                    templateKey
                                    cell_line_id
                                    clone_number
                                    status
                                    order_link
                                    donor_plasmid
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
                                    genetic_modifications {
                                        gene {
                                            frontmatter {
                                                protein
                                                structure
                                                symbol
                                                name
                                            }
                                        }
                                        allele_count
                                        tag_location
                                        fluorescent_tag
                                    }
                                    parental_line {
                                        frontmatter {
                                            name
                                        }
                                    }
                                    category_labels
                                }
                            }
                        }
                    }
                }
            `}
            render={(data: any) => <CellLineTableTemplate data={data} />}
        />
    );
}
