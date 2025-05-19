import React from "react";
import { Card } from "antd";
import { StaticQuery, graphql } from "gatsby";
import SearchBar from "../components/SearchBar";
import { createLookupMappings } from "./convert-data";
import { SearchAndFilterQueryResult, UnpackedNormalCellLine } from "./types";

const { banner } = require("../style/catalog.module.css");
const { container } = require("../style/search-and-filter.module.css");

interface SearchAndFilterProps {
    allCellLines: UnpackedNormalCellLine[];
    setResults: (filteredCellLines: UnpackedNormalCellLine[]) => void;
}

// This query groups all cell lines by gene symbol
const SearchAndFilter = ({
    allCellLines,
    setResults,
}: SearchAndFilterProps) => {
    return (
        <StaticQuery
            query={graphql`
                query SearchAndFilterQuery {
                    allMarkdownRemark(
                        filter: {
                            frontmatter: {
                                templateKey: { ne: "disease-cell-line" }
                                cell_line_id: { ne: 0 }
                                status: { ne: "hide" }
                            }
                        }
                    ) {
                        group(
                            field: {
                                frontmatter: {
                                    gene: { frontmatter: { symbol: SELECT } }
                                }
                            }
                        ) {
                            fieldValue
                            edges {
                                node {
                                    frontmatter {
                                        cell_line_id
                                        gene {
                                            frontmatter {
                                                name
                                                symbol
                                                protein
                                                structure
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={(data: SearchAndFilterQueryResult) => {
                const mappings = createLookupMappings(
                    data.allMarkdownRemark.group
                );
                return (
                    <Card className={banner}>
                        <div className={container}>
                            <div>
                                Search below or sort by clicking on column
                                headers
                            </div>
                            <SearchBar
                                allCellLines={allCellLines}
                                mappings={mappings}
                                setResults={setResults}
                            />
                        </div>
                    </Card>
                );
            }}
        />
    );
};

export default SearchAndFilter;
