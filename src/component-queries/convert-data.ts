import {
    DiseaseCellLineNode,
    NormalCellLineNode,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    UnpackedNormalCellLine,
    GeneticModification,
    SearchLookup,
    SearchAndFilterGroup,
} from "./types";
import { formatCellLineId } from "../utils";

const extractGeneticModifications = (
    modifications?: GeneticModification[]
): { taggedGene: UnpackedGene[], alleleCount: string[], tagLocation: string[], fluorescentTag: string[] } => {
    if (!modifications || !modifications.length) return {
        taggedGene: [],
        alleleCount: [],
        tagLocation: [],
        fluorescentTag: []
    };

    return {
        taggedGene: modifications
            .filter((mod) => mod.gene && mod.gene.frontmatter)
            .map((mod) => ({
                name: mod.gene.frontmatter.name,
                symbol: mod.gene.frontmatter.symbol,
                structure: mod.gene.frontmatter.structure,
                protein: mod.gene.frontmatter.protein,
            })),
        alleleCount: modifications.map((mod) => mod.allele_count),
        tagLocation: modifications.map((mod) => mod.tag_location),
        fluorescentTag: modifications.map((mod) => mod.fluorescent_tag),
    };
};

export const convertFrontmatterToDiseaseCellLine = (
    cellLineNode: DiseaseCellLineNode
): UnpackedDiseaseCellLine => {
    const diseaseData = cellLineNode.frontmatter.disease.frontmatter;
    const mutatedGenes = diseaseData.gene
        .filter((gene) => gene && gene.frontmatter)
        .map((gene) => ({
            name: gene.frontmatter.name,
            symbol: gene.frontmatter.symbol,
            structure: gene.frontmatter.structure,
            protein: gene.frontmatter.protein,
        }));
    const { taggedGene, alleleCount, tagLocation, fluorescentTag } = extractGeneticModifications(
        cellLineNode.frontmatter.parental_line.frontmatter.genetic_modifications
    );

    return {
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        healthCertificate: cellLineNode.frontmatter.hPSCreg_certificate_link,
        snp: cellLineNode.frontmatter.snp,
        status: cellLineNode.frontmatter.status,
        clones: cellLineNode.frontmatter.clones,
        orderLink: cellLineNode.frontmatter.order_link,
        diseaseStatus: diseaseData.status,
        mutatedGene: mutatedGenes,
        path: cellLineNode.fields.slug,
        parentalLine: {
            thumbnailImage:
                cellLineNode.frontmatter.parental_line.frontmatter
                    .thumbnail_image,
            cellLineId:
                cellLineNode.frontmatter.parental_line.frontmatter.cell_line_id,
            cloneNumber:
                cellLineNode.frontmatter.parental_line.frontmatter.clone_number,
            taggedGene,
            alleleCount,
            tagLocation,
            fluorescentTag,
        },
        key: cellLineNode.id,
    };
};

export const convertFrontmatterToNormalCellLines = ({
    node: cellLineNode,
}: {
    node: NormalCellLineNode;
}): UnpackedNormalCellLine => {
    const { taggedGene, alleleCount, tagLocation, fluorescentTag } = extractGeneticModifications(cellLineNode.frontmatter.genetic_modifications);
    const proteins = taggedGene.map((gene) => gene.protein);
    const structures = taggedGene.map((gene) => gene.structure);

    return {
        key: `${cellLineNode.frontmatter.cell_line_id}-${cellLineNode.frontmatter.clone_number}`,
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        cloneNumber: cellLineNode.frontmatter.clone_number,
        taggedGene: taggedGene,
        alleleCount: alleleCount,
        tagLocation: tagLocation,
        fluorescentTag: fluorescentTag,
        parentalLine: cellLineNode.frontmatter.parental_line.frontmatter.name,
        protein: proteins,
        taggedGene: genes,
        structure: structures,
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: "",
        healthCertificate: "",
        orderLink: cellLineNode.frontmatter.order_link,
        orderPlasmid: cellLineNode.frontmatter.donor_plasmid,
        thumbnailImage: cellLineNode.frontmatter.thumbnail_image?.childImageSharp?.gatsbyImageData || null,
    };
};

export const createLookupMappings = (
    data: SearchAndFilterGroup[]
): SearchLookup => {
    const geneSymToCellIds = new Map();
    const structureAndNameToGene = new Map();
    const allSearchableTerms: Set<string> = new Set();
    data.forEach((group: any) => {
        const symbol = group.fieldValue;
        allSearchableTerms.add(symbol);
        const cellLines: number[] = [];
        group.edges.forEach((edge: any) => {
            const cellLineId = edge.node.frontmatter.cell_line_id;
            cellLines.push(cellLineId);
            if (cellLineId) {
                allSearchableTerms.add(formatCellLineId(cellLineId));
            }
            const genes = edge.node.frontmatter.gene;
            genes.forEach((gene: any) => {
                const geneSymbol = gene.frontmatter.symbol;
                const geneName = gene.frontmatter.name;
                const geneProtein = gene.frontmatter.protein;
                const geneStructure = gene.frontmatter.structure;
                allSearchableTerms.add(geneSymbol);
                structureAndNameToGene.set(geneName, geneSymbol);
                structureAndNameToGene.set(geneProtein, geneSymbol);
                allSearchableTerms.add(geneName);
                allSearchableTerms.add(geneProtein);
                if (geneStructure) {
                    structureAndNameToGene.set(geneStructure, geneSymbol);
                    allSearchableTerms.add(geneStructure);
                }
            });
        });
        geneSymToCellIds.set(symbol, cellLines);
    });
    return {
        geneSymToCellIds,
        structureAndNameToGene,
        allSearchableTerms,
    };
};
