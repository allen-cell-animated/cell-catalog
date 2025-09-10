const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions;
    const typeDefs = [
        "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
        `type GeneticModification {
                gene: MarkdownRemark @link(by: "frontmatter.symbol", from: "gene")
                allele_count: String
                tag_location: String
                fluorescent_tag: String
            }`,
        ` type ImgWithCaption {
            image: File @fileByRelativePath
            caption: String
            }
            type Diagram {
            title: String
            images: [ImgWithCaption]
            }
            type DdpcrRow {
            tag: String
            clone: Float
            fp_ratio: Float
            plasmid: Float
            }
            type AmplifiedJunction {
            edited_gene: String
            junction: String
            expected_size: String
            confirmed_sequence: String
            }
            type OffTargetRow {
            clones_analyzed: Float
            off_targets_sequenced_per_clone: Float
            total_sites_sequenced: Float
            mutations_identified: Float
            }
            type MarkdownRemarkFrontmatterGenomic_characterization {
            diagrams: [Diagram]
            amplified_junctions: [AmplifiedJunction]
            junction_table_caption: String
            ddpcr: [DdpcrRow]
            ddpcr_caption: String
            cr_rna_off_targets: [OffTargetRow]
            off_targets_caption: String
            } `,
        `type Frontmatter {
                disease: MarkdownRemark @link(by: "frontmatter.name")
                genetic_modifications: [GeneticModification]
                gene: [MarkdownRemark] @link(by: "frontmatter.symbol", from: "gene")
                parental_line: MarkdownRemark @link(by: "frontmatter.cell_line_id")
                funding_text:  String @md
                footer_text: String @md
            }`,
    ];
    createTypes(typeDefs);
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        const edges = result.data.allMarkdownRemark.edges;
        edges.forEach((edge) => {
            const id = edge.node.id;
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(
                        edge.node.frontmatter.templateKey
                    )}.tsx`
                ),
                // additional data can be passed via context
                context: {
                    id,
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
