import React from "react";
import { Flex } from "antd";
import Icon from "@ant-design/icons";
import {
    UnpackedGene,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import GeneDisplay from "../GeneDisplay";
import { CellLineColumns, mdBreakpoint } from "./types";
import { cellLineIdColumn, obtainLineColumn } from "./SharedColumns";

const Plasmid = require("../../img/plasmid.svg");

const {
    lastColumn,
    actionColumn,
    actionButton,
    plasmidIcon,
} = require("../../style/table.module.css");

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
        },
        {
            title: "Clone",
            key: "cloneNumber",
            dataIndex: "cloneNumber",
            responsive: mdBreakpoint,
        },
        {
            title: "Tagged Alleles",
            key: "alleleCount",
            dataIndex: "alleleCount",
            responsive: mdBreakpoint,
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
            key: "fluorescentTag",
            dataIndex: "fluorescentTag",
            responsive: mdBreakpoint,
            render: (fluorescentTag: string[]) => {
                return fluorescentTag?.join(" / ");
            },
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
        },
    ];

    if (!inProgress) {
        return [
            ...columns,
            { ...obtainLineColumn },
            { ...obtainPlasmidColumn },
        ];
    }
    return columns;
};
