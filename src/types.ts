export enum SubPage {
    EditingDesign = "Editing Design",
    GenomicCharacterization = "Genomic Characterization",
    StemCellCharacteristics = "Stem Cell Characteristics",
    // Protocols = "Protocols",
}

export enum Disease {
    Cardiomyopathy = "Cardiomyopathy",
    Laminopathy = "Laminopathy",
    SkeletalMyopathy = "Skeletal Myopathy",
}
export interface TextWithUrls {
    text: string;
    url?: string;
}