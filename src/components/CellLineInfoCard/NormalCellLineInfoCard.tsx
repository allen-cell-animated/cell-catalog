import React from "react";
import CellLineInfoCardBase, { NormalProps } from "./CellLineInfoCardBase";

export const NormalCellLineInfoCard: React.FC<NormalProps> = (props) => {
    console.log("NormalCellLineInfoCard props:", props);
    // matching the data with catalog 1.0, the final version may change depending on the design
    // for now, showing only the first gene data if a line has multiple genes
    const infoRows = [
        { key: "1", label: "Clone Number", children: props.cloneNumber },
        { key: "2", label: "Gene Symbol", children: props.geneSymbol },
        { key: "3", label: "Gene Name", children: props.geneName },
        { key: "4", label: "Protein", children: props.protein?.[0] },
        { key: "5", label: "Fluorescent Tag", children: props.fluorescentTag?.[0] },
        { key: "6", label: "Tagged Allele", children: props.alleleCount?.[0] },
    ];

    return <CellLineInfoCardBase {...props} infoRows={infoRows}/>;
};
