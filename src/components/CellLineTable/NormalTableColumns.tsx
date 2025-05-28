import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Flex } from "antd";
import Icon, { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { SortOrder } from "antd/es/table/interface";

import {
    UnpackedGene,
    UnpackedNormalCellLine,
    CellLineStatus,
} from "../../component-queries/types";
import { RAIN_SHADOW, SERIOUS_GRAY } from "../../style/theme";
import GeneDisplay from "../GeneDisplay";
import { obtainLineColumn } from "./SharedColumns";
import { CellLineColumns, mdBreakpoint, UnpackedCellLine } from "./types";
import { formatCellLineId } from "../../utils";

const Plasmid = require("../../img/plasmid.svg");

const {
    lastColumn,
    actionColumn,
    actionButton,
    plasmidIcon,
    cellLineId,
    thumbnailContainer,
    idHeader,
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

const cellLineIdColumn = {
    title: "Cell Collection ID",
    key: "cellLineId",
    className: cellLineId,
    dataIndex: "cellLineId",
    fixed: "left" as const,
    width: 164,
    render: (cellLineId: number, record: UnpackedCellLine) => {
        const formattedId = formatCellLineId(cellLineId);
        const cellLine = (
            <h4 key={cellLineId}>{formattedId}</h4>
        );
        const thumbnailImage = record.thumbnailImage?.childImageSharp?.gatsbyImageData ?
            getImage(record.thumbnailImage.childImageSharp.gatsbyImageData) : null;
        const content = (
            <>
                <div className={idHeader}>{cellLine}</div>
                {thumbnailImage && (
                    <div className={thumbnailContainer}>
                        <GatsbyImage
                            image={thumbnailImage}
                            alt={`${formattedId} thumbnail`}
                        />
                    </div>
                )}
            </>
        );
        return record.status === CellLineStatus.DataComplete ? (
            <Link to={record.path}>
                {content}
            </Link>
        ) : (
            content
        );
    },
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
            render: (alleleCount: string[]) => {
                return alleleCount?.join(" / ");
            },
            sorter: (a: any, b: any) =>
                caseInsensitiveStringCompare(
                    (a.alleleCount ?? []).join("|"),
                    (b.alleleCount ?? []).join("|")
                ),
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
            { ...obtainPlasmidColumn },
        ];
    }
    return columns;
};
