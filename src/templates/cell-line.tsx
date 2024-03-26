import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card, Descriptions, Flex } from "antd";

interface QueryResult {
    data: {
        markdownRemark: {
            frontmatter: {
                cell_line_id: string;
                clone_number: number;
                gene: string;
                tag_location: string;
                status: string;
                thumbnail_image: any;
                allele_count: string;
                fluorescent_tag: string;
                parental_line: {
                    name: string;
                }
            };
        };
    };
}

interface CellLineProps {
    cellLineId: string;
    cloneNumber: number;
    gene: string;
    tagLocation: string;
    status?: string;
    thumbnail: any;
    alleleCount: string;
    fluorescentTag: string;
    parentalLine: string;
}

export const CellLineTemplate = ({
    cellLineId,
    cloneNumber,
    gene,
    tagLocation,
    thumbnail,
    alleleCount,
    fluorescentTag,
    parentalLine
}: CellLineProps) => {
    const title = (
        <Flex vertical={false}>
            <span>AICS-{cellLineId}</span> 
            {thumbnail}
        </Flex>
    );
    return (
        <section>
            <Card
                className={"preview-card"}
                title={title}
                // cover={thumbnail}
            >
                <Descriptions
                    column={1}
                    layout="horizontal"
                    title="Info shown in table"
                >
                    <Descriptions.Item label="Clone Number">
                        {cloneNumber}
                    </Descriptions.Item>
                    <Descriptions.Item label="Gene">{gene}</Descriptions.Item>
                    <Descriptions.Item label="Tag location ">
                        {tagLocation}
                    </Descriptions.Item>
                    <Descriptions.Item label="Tag type">
                        {fluorescentTag}
                    </Descriptions.Item>
                    <Descriptions.Item label="Parental line">
                        {parentalLine}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </section>
    );
};

const CellLine = ({ data }: QueryResult) => {
    const { markdownRemark: cellLine } = data;
    return (
        <Layout>
            <CellLineTemplate
                cellLineId={cellLine.frontmatter.cell_line_id}
                cloneNumber={cellLine.frontmatter.clone_number}
                gene={cellLine.frontmatter.gene}
                tagLocation={cellLine.frontmatter.tag_location}
                status={cellLine.frontmatter.status}
                thumbnail={cellLine.frontmatter.thumbnail_image}
                alleleCount={cellLine.frontmatter.allele_count}
                fluorescentTag={cellLine.frontmatter.fluorescent_tag}
                parentalLine={cellLine.frontmatter.parental_line}
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
                tag_location
                status
                allele_count
                fluorescent_tag
                tag_location
                parental_line {
                    frontmatter {
                        name
                    }
                }

                thumbnail_image {
                    childImageSharp {
                        gatsbyImageData(width: 200, placeholder: BLURRED)
                    }
                }
            }
        }
    }
`;
