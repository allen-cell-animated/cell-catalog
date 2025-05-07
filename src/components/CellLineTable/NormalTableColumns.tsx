import React from "react";

import {
    UnpackedGene,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import GeneDisplay from "../GeneDisplay";
import { CellLineColumns, mdBreakpoint } from "./types";
import {
    cellLineIdColumn,
    certificateOfAnalysisColumn,
    obtainLineColumn,
} from "./SharedColumns";

const { lastColumn } = require("../../style/table.module.css");

export const getNormalTableColumns = (
    inProgress: boolean
): CellLineColumns<UnpackedNormalCellLine> => {
    const columns = [
        { ...cellLineIdColumn },
        {
            title: "Protein",
            key: "protein",
            dataIndex: "protein",
            width: 200,
            responsive: mdBreakpoint,
        },
        {
            title: "Gene Symbol & Name",
            width: 280,
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                console.log("geneticModifications", geneticModifications);
                return (
                    <>
                        {geneticModifications?.map((mod, index) => (
                            <GeneDisplay
                                key={index}
                                gene={mod.taggedGene}
                            />
                        ))}
                    </>
                )
            },
        },
        {
            title: "Clone",
            key: "cloneNumber",
            dataIndex: "cloneNumber",
            responsive: mdBreakpoint,
        },
        {
            title: "Tagged Alleles",
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.alleleCount).join(" / ");
            },
        },
        {
            title: "Structure",
            key: "structure",
            width: 280,
            dataIndex: "structure",
            responsive: mdBreakpoint,
        },
        {
            title: "Fluorescent Tag",
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.fluorescentTag).join(" / ");
            },
        },
        {
            title: "Tag Location",
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            className: inProgress ? "" : lastColumn,
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.tagLocation).join(" / ");
            }
        },
    ];

    if (!inProgress) {
        return [
            ...columns,
            { ...obtainLineColumn },
            { ...certificateOfAnalysisColumn },
        ];
    }
    return columns;
};
