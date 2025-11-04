import { StaticQuery, graphql } from "gatsby";
import React from "react";

import CategorySections from "../components/CategorySections";
import CellLineTable from "../components/CellLineTable";
import { getNormalTableMobileConfig } from "../components/CellLineTable/MobileView";
import { getNormalTableColumns } from "../components/CellLineTable/NormalTableColumns";
import { PHONE_BREAKPOINT } from "../constants";
import useWindowWidth from "../hooks/useWindowWidth";
import SearchAndFilter from "./SearchAndFilter";
import { convertFrontmatterToNormalCellLines } from "./convert-data";
import { CategoryLabel, CellLineStatus, NormalCellLineNode } from "./types";

const CellLineTableTemplate = (props: QueryResult) => {
    const { edges: cellLines } = props.data.allMarkdownRemark;

    const allCellLines = cellLines.map((cellLine) =>
        convertFrontmatterToNormalCellLines(cellLine),
    );

    const width = useWindowWidth();
    const isPhone = width < PHONE_BREAKPOINT;
    const [filteredCellLines, setFilteredCellLines] =
        React.useState(allCellLines);
    const [selectedCategories, setSelectedCategories] = React.useState<
        CategoryLabel[]
    >([]);

    const inProgressCellLines = filteredCellLines.filter(
        (cellLine) => cellLine.status === CellLineStatus.InProgress,
    );
    const finishedCellLines = filteredCellLines.filter(
        (cellLine) => cellLine.status !== CellLineStatus.InProgress,
    );

    const filteredByCategory = selectedCategories.length > 0;
    const hasInProgressLines = inProgressCellLines.length > 0;

    const defaultRender = (
        <>
            <CellLineTable
                tableName="Cell Line Catalog"
                cellLines={finishedCellLines}
                released={true}
                columns={getNormalTableColumns(false)}
                mobileConfig={getNormalTableMobileConfig(isPhone)}
            />
            {!!inProgressCellLines.length && (
                <CellLineTable
                    tableName="Cell Line Catalog"
                    cellLines={inProgressCellLines}
                    released={false}
                    columns={getNormalTableColumns(true)}
                    mobileConfig={getNormalTableMobileConfig(isPhone )}
                />
            )}
        </>
    );

    const sortedBySelectedCategoryRender = (
        <>
            <CategorySections
                selectedCategories={selectedCategories}
                filteredList={finishedCellLines}
                isPhone={isPhone}
                released={true}
            />
            {hasInProgressLines && (
                <CategorySections
                    selectedCategories={selectedCategories}
                    filteredList={inProgressCellLines}
                    isPhone={isPhone}
                    released={false}
                />
            )}
        </>
    );

    return (
        <>
            <SearchAndFilter
                allCellLines={allCellLines}
                filteredCellLines={filteredCellLines}
                setResults={setFilteredCellLines}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            {filteredByCategory
                ? sortedBySelectedCategoryRender
                : defaultRender}
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
            render={(data) => <CellLineTableTemplate data={data} />}
        />
    );
}
