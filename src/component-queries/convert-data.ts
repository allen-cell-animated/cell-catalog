import {
    DiseaseCellLineNode,
    NormalCellLineNode,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    GeneFrontMatter,
    UnpackedNormalCellLine,
    SearchLookup,
    SearchAndFilterGroup,
} from "./types";
import { formatCellLineId } from "../utils";

const extractGenes = (
    geneArray: { frontmatter: GeneFrontMatter }[] = []
): UnpackedGene[] => {
    if (!geneArray) return [];

    return geneArray
        .filter((gene) => gene && gene.frontmatter)
        .map((gene) => ({
            name: gene.frontmatter.name,
            symbol: gene.frontmatter.symbol,
            structure: gene.frontmatter.structure,
            protein: gene.frontmatter.protein,
        }));
};

export const convertFrontmatterToDiseaseCellLine = (
    cellLineNode: DiseaseCellLineNode
): UnpackedDiseaseCellLine => {
    const diseaseData = cellLineNode.frontmatter.disease.frontmatter;
    const mutatedGenes = extractGenes(diseaseData.gene);
    const parentalGenes = extractGenes(
        cellLineNode.frontmatter.parental_line.frontmatter.gene
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
            tagLocation:
                cellLineNode.frontmatter.parental_line.frontmatter.tag_location,
            fluorescentTag:
                cellLineNode.frontmatter.parental_line.frontmatter
                    .fluorescent_tag,
            taggedGene: parentalGenes,
        },
        key: cellLineNode.id,
    };
};

export const convertFrontmatterToNormalCellLines = ({
    node: cellLineNode,
}: {
    node: NormalCellLineNode;
}): UnpackedNormalCellLine => {
    const genes = extractGenes(cellLineNode.frontmatter.gene);
    const proteins = genes.map((gene) => gene.protein || "");
    const structures = genes.map((gene) => gene.structure || "");
    return {
        key: `${cellLineNode.frontmatter.cell_line_id}-${cellLineNode.frontmatter.clone_number}`,
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        cloneNumber: cellLineNode.frontmatter.clone_number,
        alleleCount: cellLineNode.frontmatter.allele_count,
        fluorescentTag: cellLineNode.frontmatter.fluorescent_tag,
        tagLocation: cellLineNode.frontmatter.tag_location,
        parentalLine: cellLineNode.frontmatter.parental_line.frontmatter.name,
        protein: proteins.join(" / "),
        taggedGene: genes,
        structure: structures.join(" / "),
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: "",
        healthCertificate: "",
        orderLink: cellLineNode.frontmatter.order_link,
        orderPlasmid: cellLineNode.frontmatter.donor_plasmid,
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
                structureAndNameToGene.set(geneStructure, geneSymbol);
                allSearchableTerms.add(geneName);
                allSearchableTerms.add(geneProtein);
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
