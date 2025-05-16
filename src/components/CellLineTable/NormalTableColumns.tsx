import React from "react";
import { Flex } from "antd";
import Icon, { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { SortOrder } from "antd/es/table/interface";
import {
    UnpackedGene,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import { RAIN_SHADOW, SERIOUS_GRAY } from "../../style/theme";
import GeneDisplay from "../GeneDisplay";
import { cellLineIdColumn, obtainLineColumn } from "./SharedColumns";
import { CellLineColumns, mdBreakpoint } from "./types";

const Plasmid = require("../../img/plasmid.svg");

const {
    lastColumn,
    actionColumn,
    actionButton,
    plasmidIcon,
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
        return (
            orderPlasmid && (
                <a
                    className={actionButton}
                    href={orderPlasmid}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex gap={8}>
                        <Icon
                            className={plasmidIcon}
                            component={Plasmid}
                            style={{ fontSize: 28 }}
                        />
                        Obtain Plasmid
                    </Flex>
                </a>
            )
        );
    },
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
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                
                return geneticModifications?.map(mod => mod.alleleCount).join(" / ");
            },
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
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.fluorescentTag).join(" / ");
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
            key: "geneticModifications",
            dataIndex: "geneticModifications",
            className: inProgress ? "" : lastColumn,
            responsive: mdBreakpoint,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.tagLocation).join(" / ");
            }
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
            { ...obtainPlasmidColumn },
        ];
    }
    return columns;
};
