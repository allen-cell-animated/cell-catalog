import {
    DiseaseCellLineNode,
    NormalCellLineNode,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    UnpackedNormalCellLine,
    GeneticModification,
} from "./types";

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
                name: mod.gene?.frontmatter.name || "",
                symbol: mod.gene?.frontmatter.symbol || "",
                structure: mod.gene?.frontmatter.structure || "",
                protein: mod.gene?.frontmatter.protein || "",
            })),
        alleleCount: modifications.map((mod) => mod.allele_count || ""),
        tagLocation: modifications.map((mod) => mod.tag_location || ""),
        fluorescentTag: modifications.map((mod) => mod.fluorescent_tag || ""),
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
    const proteins = taggedGene.map((gene) => gene.protein || "");
    const structures = taggedGene.map((gene) => gene.structure || "");

    return {
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        cloneNumber: cellLineNode.frontmatter.clone_number,
        taggedGene: taggedGene,
        alleleCount: alleleCount,
        tagLocation: tagLocation,
        fluorescentTag: fluorescentTag,
        parentalLine: cellLineNode.frontmatter.parental_line.frontmatter.name,
        protein: proteins.join(" / "),
        structure: structures.join(" / "),
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: "",
        healthCertificate: "",
        orderLink: cellLineNode.frontmatter.order_link,
        orderPlasmid: cellLineNode.frontmatter.donor_plasmid,
    };
};
