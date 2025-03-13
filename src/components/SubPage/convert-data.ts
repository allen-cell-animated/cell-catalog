import {
    Diagram,
    Clone,
    DiseaseCellLineNode,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import { UnpackedDiseaseCellLineFull, UnpackedEditingDesign } from "./types";

export const unpackDiagrams = (diagrams?: Diagram[]): DiagramCardProps[] => {
    if (!diagrams || diagrams.length === 0) {
        return [];
    }
    return diagrams.map((diagram) => {
        return {
            title: diagram.title,
            caption: diagram.caption,
            image: diagram.image.childImageSharp.gatsbyImageData,
        };
    });
};

// subpage data
export const unpackEditingDesignData = (editing_design?: {
    crna_target_site?: string;
    dna_donor_sequence?: string;
    cas9?: string;
    f_primer?: string;
    r_primer?: string;
    diagrams?: Diagram[];
}): UnpackedEditingDesign => {
    if (!editing_design) {
        return {};
    }
    return {
        crnaTargetSite: editing_design.crna_target_site,
        dnaDonorSequence: editing_design.dna_donor_sequence,
        cas9: editing_design.cas9,
        fPrimer: editing_design.f_primer,
        rPrimer: editing_design.r_primer,
        diagrams: unpackDiagrams(editing_design.diagrams),
    };
};

export const getStemCellCharData = (clones: Clone[]) => {
    return clones.map((clone) => {
        return {
            cloneNumber: clone.clone_number,
            type: clone,
            percentPositiveCells: clone.positive_cells,
            // passingAntibodies: clone.antibody_analysis,
            // differentiation: clone.differentiation,
        };
    });
};

export const unpackDiseaseFrontmatterForSubpage = (
    cellLineNode: DiseaseCellLineNode
): UnpackedDiseaseCellLineFull => {
    const parentalLineData = cellLineNode.frontmatter.parental_line.frontmatter;

    const { name: geneName, symbol: geneSymbol } =
        cellLineNode.frontmatter.disease.frontmatter.gene.frontmatter;

    const editingDesign = unpackEditingDesignData(
        cellLineNode.frontmatter.editing_design
    );
    const genomicCharacterization = unpackDiagrams(
        cellLineNode.frontmatter.genomic_characterization?.diagrams
    );
    const stemCellCharData = getStemCellCharData(
        cellLineNode.frontmatter.clones
    );

    return {
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        snp: cellLineNode.frontmatter.snp,
        status: cellLineNode.frontmatter.status,
        clones: cellLineNode.frontmatter.clones,
        orderLink: cellLineNode.frontmatter.order_link,
        geneName: geneName,
        geneSymbol: geneSymbol,
        parentalLine: parentalLineData,
        healthCertificate: cellLineNode.frontmatter.hPSCreg_certificate_link,
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        editingDesign: editingDesign,
        genomicCharacterization: genomicCharacterization,
        stemCellCharData: stemCellCharData,
    };
};
