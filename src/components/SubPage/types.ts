import {
    Clone,
    GeneFrontMatter,
    ParentalLineFrontmatter,
    UnpackedCellLineMainInfo,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";
import { SubpageTabsProps } from "./SubpageTabs";

export interface UnpackedEditingDesign {
    crnaTargetSite?: string;
    dnaDonorSequence?: string;
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: DiagramCardProps[];
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
    editingDesign?: UnpackedEditingDesign;
    genomicCharacterization?: DiagramCardProps[];
    stemCellCharData: SubpageTabsProps;
}
