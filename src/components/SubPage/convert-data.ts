import { isEmpty } from "lodash";
import {
    DiagramList,
    Clone,
    DiseaseCellLineNode,
    Sequence,
    SingleImageDiagram,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import {
    ClonePercentPositive,
    UnpackedDiseaseCellLineFull,
    UnpackedEditingDesign,
} from "./types";
import { StemCellCharProps } from "./StemCellChar";

export const unpackDiagrams = (diagrams?: SingleImageDiagram[]): DiagramCardProps[] => {
    if (!diagrams || diagrams.length === 0) {
        return [];
    }
    return diagrams.map((diagram) => {
        return {
            title: diagram.title,
            caption: diagram.caption,
            image: diagram.image
                ? diagram.image.childImageSharp.gatsbyImageData
                : undefined,
        };
    });
};

export const unpackMultiImageDiagrams = (diagrams?: DiagramList[]): DiagramCardProps[] => {
    if (!diagrams || diagrams.length === 0) {
        return [];
    }

    const result: DiagramCardProps[] = [];

    diagrams.forEach((diagram) => {
        if (!diagram.images || diagram.images.length === 0) {
            return;
        }

        diagram.images.forEach((imageObj, index) => {
            result.push({
                title: index === 0 ? diagram.title : "",
                caption: imageObj.caption,
                image: imageObj.image.childImageSharp.gatsbyImageData,
            });
        });
    });

    return result;
};

// subpage data
export const unpackEditingDesignData = (editing_design?: {
    crna_target_site?: string;
    dna_donor_sequence?: Sequence[];
    cas9?: string;
    f_primer?: string;
    r_primer?: string;
    diagrams?: DiagramList[];
}): UnpackedEditingDesign | null => {
    if (!editing_design) {
        return null;
    }
    const diagrams = unpackMultiImageDiagrams(editing_design.diagrams);
    const data = {
        crnaTargetSite: editing_design.crna_target_site,
        dnaDonorSequence: editing_design.dna_donor_sequence,
        cas9: editing_design.cas9,
        fPrimer: editing_design.f_primer,
        rPrimer: editing_design.r_primer,
        diagrams: diagrams.length > 0 ? diagrams : undefined, // an empty array is still truthy
    };

    if (isEmpty(data)) {
        return null;
    } else {
        return data;
    }
};

export const getStemCellCharData = (
    clones: Clone[]
): StemCellCharProps | null => {
    const init: {
        percentPositive: ClonePercentPositive[];
        passingAntibodies: any[];
        differentiation: any[];
    } = {
        percentPositive: [],
        passingAntibodies: [],
        differentiation: [],
    };
    const data = clones.reduce((acc, clone) => {
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
    if (
        data.percentPositive.length === 0 &&
        data.passingAntibodies.length === 0 &&
        data.differentiation.length === 0
    ) {
        return null;
    } else {
        return data;
    }
};

export const unpackDiseaseFrontmatterForSubpage = (
    cellLineNode: DiseaseCellLineNode
): UnpackedDiseaseCellLineFull => {
    const parentalLineData = cellLineNode.frontmatter.parental_line.frontmatter;

    const firstGeneticMod = parentalLineData.genetic_modifications?.find(
        mod => mod && mod.gene && mod.gene.frontmatter
    );

    const parentalGene = firstGeneticMod?.gene?.frontmatter || {
        name: "",
        symbol: "",
        structure: "",
        protein: ""
    };

    const { name: geneName, symbol: geneSymbol } =
        cellLineNode.frontmatter.disease.frontmatter.gene[0].frontmatter;

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
        parentalLineGene: parentalGene,
        clones: cellLineNode.frontmatter.clones, // TODO: unpack this into only data needed for card
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        editingDesign: editingDesign,
        genomicCharacterization: genomicCharacterization,
        stemCellCharData: stemCellCharData,
    };
};
