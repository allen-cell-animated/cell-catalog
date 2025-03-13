import {
    Diagram,
    Clone,
    DiseaseCellLineNode,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import {
    ClonePercentPositive,
    UnpackedDiseaseCellLineFull,
    UnpackedEditingDesign,
} from "./types";

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
    const init: {
        percentPositive: ClonePercentPositive[];
        passingAntibodies: any[];
        differentiation: any[];
    } = {
        percentPositive: [],
        passingAntibodies: [],
        differentiation: [],
    };
    console.log(clones);
    return clones.reduce((acc, clone) => {
        const cloneNumber = clone.clone_number;
        if (cloneNumber === undefined) {
            return acc;
        }
        if (clone.positive_cells !== undefined) {
            acc.percentPositive.push({
                cloneNumber,
                value: clone.positive_cells,
            });
        }
        return acc;
    }, init);
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
    console.log(stemCellCharData);
    return {
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        healthCertificate: cellLineNode.frontmatter.hPSCreg_certificate_link,
        orderLink: cellLineNode.frontmatter.order_link,
        geneName: geneName,
        geneSymbol: geneSymbol,
        diseaseName: cellLineNode.frontmatter.disease.frontmatter.name,
        snp: cellLineNode.frontmatter.snp,
        parentalLine: parentalLineData,
        parentalLineGene: parentalLineData.gene.frontmatter,
        clones: cellLineNode.frontmatter.clones,
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        editingDesign: editingDesign,
        genomicCharacterization: genomicCharacterization,
        stemCellCharData: stemCellCharData,
    };
};
