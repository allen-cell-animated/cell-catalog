import React from "react";
import CellLineInfoCardLayout from "./CellLineInfoCardBase";
import { getCloneSummary, formatCellLineId } from "../../utils";
import { Clone, ParentLine } from "../../component-queries/types";
import { CellLineInfoCardBaseProps } from "./types";

interface DiseaseCellLineInfoCardProps extends CellLineInfoCardBaseProps {
    parentalLine: ParentLine;
    snp: string;
    clones: Clone[];
}

export const DiseaseCellLineInfoCard: React.FC<DiseaseCellLineInfoCardProps> = (props) => {
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
        <CellLineInfoCardLayout
            {...props}
            infoRows={infoRows}
            cloneSummary={getCloneSummary(props.clones)}
        />
    );
};
