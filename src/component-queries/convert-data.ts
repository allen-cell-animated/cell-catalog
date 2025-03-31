import {
    DiseaseCellLineNode,
    NormalCellLineNode,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    GeneFrontMatter,
    UnpackedNormalCellLine,
} from "./types";

const multipleValues = (value: string | string[] | undefined): string => {
    if (!value || value.length === 0) return "";
    if (typeof value === "string") return value;
    return value.length > 1 ? value.join(", ") : value[0];
};


const extractGenes = (geneArray: { frontmatter: GeneFrontMatter }[] = []): UnpackedGene[] => {
    return geneArray.map((gene) => ({
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
                multipleValues(cellLineNode.frontmatter.parental_line.frontmatter.tag_location),
            fluorescentTag:
                multipleValues(cellLineNode.frontmatter.parental_line.frontmatter
                    .fluorescent_tag),
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
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        cloneNumber: cellLineNode.frontmatter.clone_number,
        alleleCount: cellLineNode.frontmatter.allele_count,
        fluorescentTag: multipleValues(cellLineNode.frontmatter.fluorescent_tag),
        tagLocation: multipleValues(cellLineNode.frontmatter.tag_location),
        parentalLine: cellLineNode.frontmatter.parental_line.frontmatter.name,
        protein: proteins.join(", "),
        taggedGene: genes,
        structure: structures.join(", "),
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: "",
        healthCertificate: "",
        orderLink: cellLineNode.frontmatter.order_link,
    };
};
