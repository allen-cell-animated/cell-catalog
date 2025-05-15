import React from "react";
import { SortOrder } from "antd/es/table/interface";

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
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { RAIN_SHADOW, SERIOUS_GRAY } from "../../style/theme";

const { lastColumn } = require("../../style/table.module.css");

const caseInsensitiveStringCompare = (a = "", b = "") =>
    a.localeCompare(b, undefined, { sensitivity: "base" });

const sortIcon = ({ sortOrder }: { sortOrder: SortOrder }) => {
    if (sortOrder === null) {
        return (
            <CaretDownOutlined style={{ color: RAIN_SHADOW, fontSize: 16 }} />
        );
    }
    return sortOrder === "ascend" ? (
        <CaretDownOutlined style={{ color: SERIOUS_GRAY, fontSize: 16 }} />
    ) : (
        <CaretUpOutlined style={{ color: SERIOUS_GRAY, fontSize: 16 }} />
    );
};

export const getNormalTableColumns = (
    inProgress: boolean
): CellLineColumns<UnpackedNormalCellLine> => {
    const columns = [
        {
            ...cellLineIdColumn,
            sorter: (a: any, b: any) =>
                (a.cellLineId ?? 0) - (b.cellLineId ?? 0),
            sortIcon: sortIcon,
            defaultSortOrder: "ascend" as SortOrder,
        },
        {
            title: "Protein",
            key: "protein",
            dataIndex: "protein",
            width: 200,
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(a.protein, b.protein),
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
            sortIcon: sortIcon,
            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(
                    a.taggedGene[0].name,
                    b.taggedGene[0].name
                ),
        },
        {
            title: "Tagged Alleles",
            key: "alleleCount",
            dataIndex: "alleleCount",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(a.alleleCount, b.alleleCount),
        },
        {
            title: "Structure",
            key: "structure",
            width: 280,
            dataIndex: "structure",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,

            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(a.structure, b.structure),
        },
        {
            title: "Fluorescent Tag",
            key: "fluorescentTag",
            dataIndex: "fluorescentTag",
            responsive: mdBreakpoint,
            render: (fluorescentTag: string[]) => {
                return fluorescentTag?.join(" / ");
            },
            sortIcon: sortIcon,

            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(
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
            sortIcon: sortIcon,
            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(
                    (a.tagLocation ?? []).join("|"),
                    (b.tagLocation ?? []).join("|")
                ),
        },
    ];
    // if active add the buttons
    if (!inProgress) {
        return [
            ...columns,
            { ...obtainLineColumn },
            { ...certificateOfAnalysisColumn },
        ];
    }
    // remove the sorting function from the inprogress table
    return columns.map((column) => {
        return {
            ...column,
            sorter: undefined,
        };
    });
};
