import {
    Clone,
    ParentLine,
    Sequence,
    UnpackedCellLineMainInfo,
    UnpackedGene,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import { StemCellCharProps } from "./StemCellChar";

// crRNA field for normal cell lines differs from 
// crRnaTargetSite field for disease cell lines
export interface UnpackedEditingDesign {
    crRnaTargetSite?: string;
    dnaDonorSequence?: Sequence[];
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: DiagramCardProps[];
    crRNA?: string;
    linker?: string;
    ncbiIsoforms?: string;
}

export interface AmplifiedJunction {
    editedGene: string;
    junction: string;
    expectedSize: string;
    confirmedSequence: string;
}

export interface DDCPR {
    tag: string;
    clone: number;
    fpRatio: number;
    plasmid: number;
}

export interface CrRnaOffTargets {
    clonesAnalyzed: number;
    offTargetsSequenced: number;
    totalSitesSequenced: number;
    mutationsIdentified: number;
}

export type GenoCharDataTypes = AmplifiedJunction | DDCPR | CrRnaOffTargets;

export interface GenomicCharacterizationTableData<T extends GenoCharDataTypes = GenoCharDataTypes> {
    caption: string;
    data: T[];
}

export type AmplifiedJunctionData = GenomicCharacterizationTableData<AmplifiedJunction>
export type DdcprData = GenomicCharacterizationTableData<DDCPR>
export type CrRnaOffTargetsData = GenomicCharacterizationTableData<CrRnaOffTargets>

export interface UnpackedGenomicCharacterization {
    diagrams?: DiagramCardProps[];
    amplifiedJunctions?: AmplifiedJunctionData;
    ddpcr?: DdcprData;
    crRnaOffTargets?: CrRnaOffTargetsData;
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
    editingDesign: UnpackedEditingDesign | null;
    genomicCharacterization: UnpackedGenomicCharacterization | null;
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
    genomicCharacterization: UnpackedGenomicCharacterization | null;
}
