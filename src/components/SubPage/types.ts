import {
    Clone,
    ParentLine,
    Sequence,
    UnpackedCellLineMainInfo,
    UnpackedGene,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import { StemCellCharProps } from "./StemCellChar";

// crna field for normal cell lines differs from 
// crnaTargetSite field for disease cell lines
export interface UnpackedEditingDesign {
    crnaTargetSite?: string;
    dnaDonorSequence?: Sequence[];
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: DiagramCardProps[];
    crna?: string;
    linker?: string;
    ncbi_isoforms?: string;
}

export interface ClonePercentPositive {
    cloneNumber: number;
    value: number;
}

export interface UnpackedDiseaseCellLineFull extends UnpackedCellLineMainInfo {
    geneName: string;
    geneSymbol: string;
    diseaseName: string;
    snp: string;
    parentalLine: ParentLine;
    clones: Clone[];
    imagesAndVideos: any;
    editingDesign: UnpackedEditingDesign | null;
    genomicCharacterization?: DiagramCardProps[];
    stemCellCharData: StemCellCharProps | null;
}

export interface UnpackedNormalCellLineFull extends UnpackedCellLineMainInfo {
    key: string;
    cloneNumber: number;
    parentalLine: string;
    structure: string[];
    protein: string[];
    geneticModifications?: {
        taggedGene: UnpackedGene;
        alleleCount: string;
        tagLocation: string;
        fluorescentTag: string;
    }[];
    taggedGene: UnpackedGene[];
    alleleCount: string[];
    tagLocation: string[];
    fluorescentTag: string[];
    orderPlasmid: string;
    editingDesign: UnpackedEditingDesign | null;
}
