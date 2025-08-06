import React from "react";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { CellLineInfoCardRequiredProps } from "./types";
interface NormalCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    orderPlasmid: string;
    cloneNumber: number;
    taggedGene: {
        name: string;
        symbol: string;
        structure?: string;
        protein?: string;
    }[];
    fluorescentTag: string[];
    alleleCount: string[];
}

export const NormalCellLineInfoCard: React.FC<NormalCellLineInfoCardProps> = (
    props
) => {
    const buttonList = [
        {
            label: "Certificate of Analysis",
            href: props.certificateOfAnalysis,
        },
        {
            label: "hPSCreg Certificate",
            href: props.healthCertificate,
        },
        {
            label: "Obtain Plasmid",
            href: props.orderPlasmid,
        },
    ];

    const extractFieldsFromTaggedGene = (
        field: keyof (typeof props.taggedGene)[0]
    ) => {
        return props.taggedGene.map((gene) => gene[field]).join(", ");
    };

    // matching the data with catalog 1.0, the final version may change depending on the design
    // for now, showing only the first gene data if a line has multiple genes
    const infoRows = [
        { key: "1", label: "Clone Number", children: props.cloneNumber },
        {
            key: "2",
            label: "Gene Symbol",
            children: extractFieldsFromTaggedGene("symbol"),
        },

        {
            key: "3",
            label: "Gene Name",
            children: extractFieldsFromTaggedGene("name"),
        },
        {
            key: "4",
            label: "Protein",
            children: extractFieldsFromTaggedGene("protein"),
        },
        {
            key: "5",
            label: "Fluorescent Tag",
            children: props.fluorescentTag.join(", "),
        },
        {
            key: "6",
            label: "Tagged Allele",
            children: props.alleleCount.join(", "),
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
        />
    );
};
