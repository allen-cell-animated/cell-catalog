import {
    Clone,
    ParentLine,
    Sequence,
    UnpackedCellLineMainInfo,
    UnpackedGene,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";

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

export interface PluripotencyAnalysis {
    marker: string;
    positiveCells: number;
}

export interface TrilineageDifferentiation {
    germLayer: string; // Ectoderm, Endoderm, Mesoderm
    marker: string;
    percentPositiveCells: string;
}

export interface CardiomyocyteDifferentiation {
    troponinPercentPositive: string;
    dayOfBeatingPercent: string;
    dayOfBeatingRange: string;
}

export interface DiseaseCardioMyocyteDifferentiation {
    percentPositive: ClonePercentPositive[];
    passingAntibodies?: any[]; //TODO: type this once we have the data
    differentiation?: any[];
}

export type StemCellCharDataTypes = PluripotencyAnalysis | TrilineageDifferentiation | CardiomyocyteDifferentiation | DiseaseCardioMyocyteDifferentiation;

export interface StemCellCharTableData<T extends StemCellCharDataTypes = StemCellCharDataTypes> {
    caption: string;
    data: T[];
}

export type PluripotencyAnalysisData = StemCellCharTableData<PluripotencyAnalysis>
export type TrilineageDifferentiationData = StemCellCharTableData<TrilineageDifferentiation>
export type CardiomyocyteDifferentiationData = StemCellCharTableData<CardiomyocyteDifferentiation>
export type DiseaseCardioMyocyteDifferentiationData = StemCellCharTableData<DiseaseCardioMyocyteDifferentiation>

export interface UnpackedStemCellCharacteristics {
    pluripotencyAnalysis?: PluripotencyAnalysisData;
    trilineageDifferentiation?: TrilineageDifferentiationData;
    cardiomyocyteDifferentiation?: CardiomyocyteDifferentiationData;
    rnaSeqAnalysis?: DiagramCardProps[];
    diseaseCardioMyocyteDifferentiation?: DiseaseCardioMyocyteDifferentiationData;
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
    genomicCharacterization?: DiagramCardProps[];
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
