import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SearchBar from "../components/SearchBar";
import { dataForSearch } from "./convert-data";

const SearchAndFilter = ({ dataToFilter, onSearch }) => {
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
            render={(data) => {
                const mapping = dataForSearch(data.allMarkdownRemark.group);
                console.log(mapping);
                return (
                    <SearchBar
                        dataToSearch={dataToFilter}
                        mappings={mapping}
                        onSearch={onSearch}
                    />
                );
            }}
        />
    );
};

export default SearchAndFilter;
