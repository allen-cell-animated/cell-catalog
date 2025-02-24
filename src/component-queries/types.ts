import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Isoform {
    name: string;
    ids?: string[];
}
export interface GeneFrontMatter {
    name: string;
    symbol: string;
    structure?: string;
    protein?: string;
    isoforms?: Isoform[];
}

export interface ParentalLineFrontmatter {
    cell_line_id: number;
    clone_number: number;
    allele_count: string;
    tag_location: string;
    fluorescent_tag: string;
    thumbnail_image: any;
    gene: {
        frontmatter: GeneFrontMatter;
    };
}

export interface NormalCellLineFrontmatter {
    templateKey: string;
    cell_line_id: number;
    status: CellLineStatus;
    clone_number: number;
    tag_location: string;
    fluorescent_tag: string;
    allele_count: string;
    order_link: string;
    parental_line: {
        frontmatter: {
            name: string;
        };
    };
    gene: {
        frontmatter: {
            protein: string;
            name: string;
            symbol: string;
            structure: string;
        };
    };
}

export interface NormalCellLineNode {
    id: string;
    fields: {
        slug: string;
    };
    frontmatter: NormalCellLineFrontmatter;
}

export enum CellLineStatus {
    DataComplete = "data complete",
    Released = "released",
    InProgress = "in progress",
}

// NOTE: Temporarily optional fields, but
// once the data has been updated by gene editing
// these fields will be required
export interface Clone {
    type: string;
    clone_number?: number;
    genotype?: string;
    transfection_replicate?: string;
}

export interface Diagram {
    image: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    title: string;
    caption: string;
}

export interface DiseaseCellLineFrontmatter {
    templateKey: string;
    cell_line_id: number;
    parental_line: { frontmatter: ParentalLineFrontmatter };
    disease: {
        frontmatter: DiseaseFrontmatter;
    };
    snp: string;
    clones: Clone[];
    certificate_of_analysis: string;
    order_link: string;
    status: CellLineStatus;
    hPSCreg_certificate_link: string;
    images_and_videos: {
        images: {
            image: any;
            caption: string;
        }[];
        videos: {
            video: any;
            caption: string;
        }[];
    };
    editing_design: {
        crna_target_site: string;
        dna_donor_sequence: string;
        cas9: string;
        f_primer: string;
        r_primer: string;
        diagrams: Diagram[];
    };
}

export interface DiseaseCellLineNode {
    id: string;
    fields: {
        slug: string;
    };
    frontmatter: DiseaseCellLineFrontmatter;
}

export interface DiseaseCellLineEdge {
    node: DiseaseCellLineNode;
}

export interface DiseaseFrontmatter {
    name: string;
    gene: {
        frontmatter: GeneFrontMatter;
    };
    status: string;
    acknowledgements: { html: string };
}

export interface UnpackedGene {
    name: string;
    symbol: string;
    structure?: string;
    protein?: string;
}

export interface UnpackedCellLineMainInfo {
    path: string;
    cellLineId: number;
    status: CellLineStatus;
    certificateOfAnalysis: string;
    hPSCregCertificateLink: string;
    orderLink: string;
    thumbnailImage?: FileNode;
}
export interface UnpackedNormalCellLine extends UnpackedCellLineMainInfo {
    cloneNumber: number;
    tagLocation: string;
    fluorescentTag: string;
    taggedGene: UnpackedGene;
    alleleCount: string;
    parentalLine: string;
    structure: string;
    protein: string;
}

export interface EditingDesignData {
    crnaTargetSite?: string;
    dnaDonorSequence?: string;
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: Diagram[];
}

export type ParentLine = Partial<UnpackedNormalCellLine>;

export interface UnpackedDiseaseCellLine extends UnpackedCellLineMainInfo {
    diseaseStatus: string;
    path: string;
    key: string;
    snp: string;
    clones: Clone[];
    parentalLine: ParentLine;
    mutatedGene: UnpackedGene;
    editingDesign?: EditingDesignData;
}
