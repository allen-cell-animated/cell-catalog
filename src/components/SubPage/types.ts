import {
    Clone,
    Diagram,
    GeneFrontMatter,
    ParentalLineFrontmatter,
    Sequence,
    UnpackedCellLineMainInfo,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import { StemCellCharProps } from "./StemCellChar";

export interface UnpackedEditingDesign {
    crnaTargetSite?: string;
    dnaDonorSequence?: Sequence[];
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: DiagramCardProps[];
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
    parentalLine: ParentalLineFrontmatter;
    parentalLineGene: GeneFrontMatter;
    clones: Clone[];
    imagesAndVideos: any;
    editingDesign: UnpackedEditingDesign | null;
    genomicCharacterization?: DiagramCardProps[];
    stemCellCharData: StemCellCharProps | null;
}
