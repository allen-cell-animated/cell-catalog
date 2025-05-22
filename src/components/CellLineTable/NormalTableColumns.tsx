import React from "react";
import { Flex, Typography, TooltipProps } from "antd";
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
const { Text } = Typography;

const {
    lastColumn,
    actionColumn,
    actionButton,
    plasmidIcon,
    protein,
    gene,
    geneContainer,
    structure,
    tooltip,
    truncatedText,
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

export const getTooltipProps = (text: string): TooltipProps => {
    return { title: text, arrow: false, rootClassName: tooltip };
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
            width: 220,
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            className: protein,
            render: (text: string) => (
                <Text
                    className={truncatedText}
                    ellipsis={{ tooltip: getTooltipProps(text) }}
                >
                    {text}
                </Text>
            ),

            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(a.protein, b.protein),
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
                    <div className={geneContainer}>
                        {taggedGene.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </div>
                );
            },
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
            width: 220,
            dataIndex: "structure",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            className: structure,
            render: (text: string) => (
                <Text
                    className={truncatedText}
                    ellipsis={{ tooltip: getTooltipProps(text) }}
                >
                    {text}
                </Text>
            ),
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
            { ...obtainPlasmidColumn },
        ];
    }
    return columns;
};
