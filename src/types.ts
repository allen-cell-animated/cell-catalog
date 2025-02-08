import { IGatsbyImageData } from "gatsby-plugin-image";

export enum SubPage {
    EditingDesign = "Editing Design",
    GenomicCharacterization = "Genomic Characterization",
    StemCellCharacteristics = "Stem Cell Characteristics",
    Protocols = "Protocols",
}

export enum Disease {
    Cardiomyopathy = "Cardiomyopathy",
    Laminopathy = "Laminopathy",
    SkeletalMyopathy = "Skeletal Myopathy",
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