import React from "react";
import { formatCellLineId } from "../../utils";
import CellLineInfoCardBase, { NormalProps } from "./CellLineInfoCardBase";

export const NormalCellLineInfoCard: React.FC<NormalProps> = (props) => {
    console.log("NormalCellLineInfoCard props:", props);
    const infoRows = [
        { key: "1", label: "Clone Number", children: props.cloneNumber },
        { key: "2", label: "Gene Symbol", children: props.geneSymbol },
        { key: "3", label: "Gene Name", children: props.geneName },
    ];

    return <CellLineInfoCardBase {...props} infoRows={infoRows} />;
};
