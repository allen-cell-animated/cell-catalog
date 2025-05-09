import React from "react";
import { Flex, GetProp, Table } from "antd";
import Icon from "@ant-design/icons";

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

/* case insensitive string comparison */
const compareStrings = (a = "", b = "") =>
    a.localeCompare(b, undefined, { sensitivity: "base" });

export const getNormalTableColumns = (
    inProgress: boolean
): CellLineColumns<UnpackedNormalCellLine> => {
    const columns = [
        {
            ...cellLineIdColumn,
            sorter: (a: any, b: any) =>
                (a.cellLineId ?? 0) - (b.cellLineId ?? 0),
        },
        {
            title: "Protein",
            key: "protein",
            dataIndex: "protein",
            width: 200,
            responsive: mdBreakpoint,
            sorter: (a: any, b: any) => compareStrings(a.protein, b.protein),
        },
        {
            title: "Gene Symbol & Name",
            width: 280,
            key: "taggedGene",
            dataIndex: "taggedGene",
            responsive: mdBreakpoint,
            render: (taggedGene: UnpackedGene[]) => {
                return (
                    <>
                        {taggedGene.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </>
                );
            },
            sorter: (a: any, b: any) =>
                compareStrings(a.taggedGene[0].name, b.taggedGene[0].name),
        },
        {
            title: "Tagged Alleles",
            key: "alleleCount",
            dataIndex: "alleleCount",
            responsive: mdBreakpoint,
            sorter: (a: any, b: any) =>
                compareStrings(a.alleleCount, b.alleleCount),
        },
        {
            title: "Structure",
            key: "structure",
            width: 280,
            dataIndex: "structure",
            responsive: mdBreakpoint,
            sorter: (a: any, b: any) =>
                compareStrings(a.structure, b.structure),
        },
        {
            title: "Fluorescent Tag",
            key: "fluorescentTag",
            dataIndex: "fluorescentTag",
            responsive: mdBreakpoint,
            render: (fluorescentTag: string[]) => {
                return fluorescentTag?.join(" / ");
            },
            sorter: (a: any, b: any) =>
                compareStrings(
                    (a.fluorescentTag ?? []).join("|"),
                    (b.fluorescentTag ?? []).join("|")
                ),
        },
        {
            title: "Tag Location",
            key: "tagLocation",
            dataIndex: "tagLocation",
            className: inProgress ? "" : lastColumn,
            responsive: mdBreakpoint,
            render: (tagLocation: string[]) => {
                return tagLocation?.join(" / ");
            },
            sorter: (a: any, b: any) =>
                compareStrings(
                    (a.tagLocation ?? []).join("|"),
                    (b.tagLocation ?? []).join("|")
                ),
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
