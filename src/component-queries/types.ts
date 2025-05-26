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
    tag_location: string[];
    fluorescent_tag: string[];
    thumbnail_image: any;
    gene: {
        frontmatter: GeneFrontMatter;
    }[];
}

export interface NormalCellLineFrontmatter {
    templateKey: string;
    cell_line_id: number;
    status: CellLineStatus;
    clone_number: number;
    tag_location: string[];
    fluorescent_tag: string[];
    allele_count: string;
    order_link: string;
    donor_plasmid: string;
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
    }[];
}

export interface NormalCellLineNode {
    id: string;
    key: string;
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

enum Antibody {
    PAX6 = "PAX6",
    SOX17 = "SOX17",
    BRACHYURY = "Brachyury",
}

enum TranscriptFactor {
    NANOG = "NANOG",
    OCT4 = "OCT4",
    SOX2 = "SOX2",
    SSEA1 = "SSEA-1",
    SSEA4 = "SSEA-4",
}

// NOTE: Temporarily optional fields, but
// once the data has been updated by gene editing
// these fields will be required
export interface Clone {
    type: string;
    clone_number?: number;
    genotype?: string;
    transfection_replicate?: string;
    positive_cells?: number;
    antibody_analysis?: Antibody[];
    differentiation?: { [key in TranscriptFactor]?: number };
}

export interface Sequence {
    sequence: string;
    type: string;
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
    images_and_videos?: {
        images: {
            image: any;
            caption: string;
        }[];
        videos: {
            video: any;
            caption: string;
        }[];
    };
    editing_design?: {
        crna_target_site: string;
        dna_donor_sequence: Sequence[];
        cas9: string;
        f_primer: string;
        r_primer: string;
        diagrams: Diagram[];
    };
    genomic_characterization?: {
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
    }[];
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
    healthCertificate: string;
    orderLink: string;
    thumbnailImage?: FileNode;
}
export interface UnpackedNormalCellLine extends UnpackedCellLineMainInfo {
    key: string;
    cloneNumber: number;
    tagLocation: string[];
    fluorescentTag: string[];
    taggedGene: UnpackedGene[];
    alleleCount: string;
    parentalLine: string;
    structure: string;
    protein: string;
    orderPlasmid: string;
}

export type ParentLine = Partial<UnpackedNormalCellLine>;

export interface UnpackedDiseaseCellLine extends UnpackedCellLineMainInfo {
    diseaseStatus: string;
    path: string;
    key: string;
    snp: string;
    clones: Clone[];
    parentalLine: ParentLine;
    mutatedGene: UnpackedGene[];
}

export interface SearchAndFilterGroup {
    fieldValue: string;
    edges: {
        node: {
            frontmatter: {
                cell_line_id: number;
                gene: {
                    frontmatter: {
                        name: string;
                        symbol: string;
                        protein: string;
                        structure: string;
                    };
                };
            };
        };
    }[];
}

export interface SearchAndFilterQueryResult {
    allMarkdownRemark: {
        group: SearchAndFilterGroup[];
    };
}

export interface SearchLookup {
    // Maps gene symbol to a list of cell line IDs
    geneSymToCellIds: Map<string, number[]>;
    // Maps each of the words associated with a gene to that gene symbol
    // (so many words map to the same gene symbol)
    // used for getting a unique identifier for the geneSymToCellIds map
    structureAndNameToGene: Map<string, string>;
    allSearchableTerms: Set<string>;
}
