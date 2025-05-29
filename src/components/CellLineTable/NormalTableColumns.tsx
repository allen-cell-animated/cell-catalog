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
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
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
            sorter: (a: any, b: any) => {
                const getFirstGeneName = (item: any) => {
                    return item.geneticModifications?.[0]?.taggedGene?.name;
                };
                return caseInsensitiveStringCompare(
                    getFirstGeneName(a),
                    getFirstGeneName(b)
                );
            }
        },
        {
            title: "Tagged Alleles",
            key: "taggedAlleles",
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.alleleCount).join(" / ");
            },
            sorter: (a: any, b: any) =>{
                const getTaggedAllelesString = (item: any) => {
                    return item.geneticModifications?.map((mod: any) => mod.alleleCount).join(" / ");
                };
                return caseInsensitiveStringCompare(
                    getTaggedAllelesString(a),
                    getTaggedAllelesString(b)
                );
            }
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
            dataIndex: "geneticModifications",
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.fluorescentTag).join(" / ");
            },
            sorter: (a: any, b: any) =>{
                const getFluorescentTagsString = (item: any) => {
                    return item.geneticModifications?.map((mod: any) => mod.fluorescentTag).join(" / ");
                };
                return caseInsensitiveStringCompare(
                    getFluorescentTagsString(a),
                    getFluorescentTagsString(b)
                );
            }
        },
        {
            title: "Tag Location",
            key: "tagLocation",
            dataIndex: "geneticModifications",
            className: inProgress ? "" : lastColumn,
            responsive: mdBreakpoint,
            sortIcon: sortIcon,
            render: (geneticModifications?: { taggedGene: UnpackedGene, alleleCount: string, tagLocation: string, fluorescentTag: string }[]) => {
                return geneticModifications?.map(mod => mod.tagLocation).join(" / ");
            },
            sorter: (a: any, b: any) => {
                const getTagLocationsString = (item: any) => {
                    return item.geneticModifications?.map((mod: any) => mod.tagLocation).join(" / ");
                };
                return caseInsensitiveStringCompare(
                    getTagLocationsString(a),
                    getTagLocationsString(b)
                );
            }
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
