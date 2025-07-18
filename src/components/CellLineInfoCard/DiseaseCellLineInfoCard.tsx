import React from "react";
import CellLineInfoCardBase, { DiseaseProps } from "./CellLineInfoCardBase";
import { getCloneSummary, formatCellLineId } from "../../utils";

export const DiseaseCellLineInfoCard: React.FC<DiseaseProps> = (props) => {
    const infoRows = [
        { key: "1", label: "SNP", children: props.snp },
        { key: "2", label: "Gene Symbol", children: props.geneSymbol },
        { key: "3", label: "Gene Name", children: props.geneName },
        {
            key: "4",
            label: "Parental Line",
            children: `${formatCellLineId(props.parentalLine.cellLineId)} cl. ${
                props.parentalLine.cloneNumber
            } ${props.parentalLine.taggedGene[0].symbol}`,
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            infoRows={infoRows}
            cloneSummary={getCloneSummary(props.clones)}
        />
    );
};
