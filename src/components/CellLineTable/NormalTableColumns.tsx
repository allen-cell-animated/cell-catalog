import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Flex, Tooltip } from "antd";
import { SortOrder } from "antd/es/table/interface";
import classNames from "classnames";
import React from "react";

import {
    UnpackedGene,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import { RAIN_SHADOW, SERIOUS_GRAY } from "../../style/theme";
import GeneDisplay from "../GeneDisplay";
import PlasmidIcon from "../Icons/PlasmidIcon";
import { MultiLineTableCell, ParentComponent } from "../MultiLineTableCell";
import { cellLineIdColumn, obtainLineColumn } from "./SharedColumns";
import { CellLineColumns, mdBreakpoint } from "./types";

const {
    actionButton,
    actionColumn,
    disabled,
    gene,
    lastColumn,
    protein,
    structure,
    tableMultiLineCell,
} = require("../../style/table.module.css");

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

const obtainPlasmidColumn = {
    title: "",
    key: "orderPlasmid",
    dataIndex: "orderPlasmid",
    className: actionColumn,
    fixed: "right" as const,
    render: (orderPlasmid: string) => {
        const isDisabled = !orderPlasmid;
        const link = (
            <a
                className={classNames(actionButton, {
                    [disabled]: isDisabled,
                })}
                href={isDisabled ? undefined : orderPlasmid}
                target="_blank"
                rel="noreferrer"
            >
                <Flex gap={8}>
                    <PlasmidIcon />
                    Obtain Plasmid
                </Flex>
            </a>
        );
        return isDisabled ? (
            <Tooltip title="Plasmid not yet available">{link}</Tooltip>
        ) : (
            link
        );
    },
};

export const getNormalTableColumns = (
    inProgress: boolean,
): CellLineColumns<UnpackedNormalCellLine> => {
    const columns = [
        {
            ...cellLineIdColumn,
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                (a.cellLineId ?? 0) - (b.cellLineId ?? 0),
            sortIcon: sortIcon,
            defaultSortOrder: "ascend" as SortOrder,
        },
        {
            title: "Protein",
            key: "protein",
            dataIndex: "protein",
            width: 220,
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            className: protein,
            render: (proteins: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={proteins}
                />
            ),
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.protein ?? []).join("|"),
                    (b.protein ?? []).join("|"),
                ),
        },
        {
            title: "Gene Symbol & Name",
            width: 310,
            key: "taggedGene",
            dataIndex: "taggedGene",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            className: gene,
            render: (taggedGene: UnpackedGene[]) => {
                return (
                    <div className={tableMultiLineCell}>
                        {taggedGene.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </div>
                );
            },
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    a.taggedGene[0].name,
                    b.taggedGene[0].name,
                ),
        },
        {
            title: "Tagged Alleles",
            key: "alleleCount",
            dataIndex: "alleleCount",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            render: (alleleCount: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={alleleCount}
                />
            ),
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.alleleCount ?? []).join("|"),
                    (b.alleleCount ?? []).join("|"),
                ),
        },
        {
            title: "Structure",
            key: "structure",
            width: 220,
            dataIndex: "structure",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            className: structure,
            render: (structures: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={structures}
                />
            ),
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.structure ?? []).join("|"),
                    (b.structure ?? []).join("|"),
                ),
        },
        {
            title: "Fluorescent Tag",
            key: "fluorescentTag",
            dataIndex: "fluorescentTag",
            responsive: mdBreakpoint,
            render: (tags: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={tags}
                />
            ),
            sortIcon: sortIcon,
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.fluorescentTag ?? []).join("|"),
                    (b.fluorescentTag ?? []).join("|"),
                ),
        },
        {
            title: "Tag Location",
            key: "tagLocation",
            dataIndex: "tagLocation",
            responsive: mdBreakpoint,
            render: (locations: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={locations}
                />
            ),
            sortIcon: sortIcon,
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.tagLocation ?? []).join("|"),
                    (b.tagLocation ?? []).join("|"),
                ),
        },
        {
            title: "Category",
            key: "categoryLabels",
            dataIndex: "categoryLabels",
            className: inProgress ? "" : lastColumn,
            responsive: mdBreakpoint,
            render: (categories: string[]) => (
                <MultiLineTableCell
                    parent={ParentComponent.TABLE}
                    entries={categories}
                />
            ),
            sortIcon: sortIcon,
            sorter: (a: UnpackedNormalCellLine, b: UnpackedNormalCellLine) =>
                caseInsensitiveStringCompare(
                    (a.tagLocation ?? []).join("|"),
                    (b.tagLocation ?? []).join("|"),
                ),
        },
    ];
    // if active add the buttons
    if (!inProgress) {
        return [
            ...columns,
            { ...obtainLineColumn },
            { ...obtainPlasmidColumn },
        ];
    }
    return columns;
};
