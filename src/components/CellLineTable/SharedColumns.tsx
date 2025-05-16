import { Link } from "gatsby";
import React from "react";
import { Flex, Space } from "antd";
import Icon from "@ant-design/icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { CellLineStatus } from "../../component-queries/types";
import { formatCellLineId } from "../../utils";
import { WHITE } from "../../style/theme";
import { mdBreakpoint, UnpackedCellLine } from "./types";

const CertificateIcon = require("../../img/cert-icon.svg");
const Tube = require("../../img/tube.svg");

const {
    cellLineId,
    actionColumn,
    actionButton,
    tubeIcon,
    thumbnailContainer,
} = require("../../style/table.module.css");

export const cellLineIdColumn = {
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
            <Space>
                {thumbnailImage && (
                    <div className={thumbnailContainer}>
                        <GatsbyImage
                            image={thumbnailImage}
                            alt={`${formattedId} thumbnail`}
                        />
                    </div>
                )}
                {cellLine}
            </Space>
        );
        return record.status === CellLineStatus.DataComplete ? (
            <Link to={record.path}>{cellLine}</Link>
        ) : (
            content
        );
    },
};

export const certificateOfAnalysisColumn = {
    title: "",
    key: "certificateOfAnalysis",
    dataIndex: "certificateOfAnalysis",
    className: actionColumn,
    fixed: "right" as const,
    responsive: mdBreakpoint,
    render: (certificateOfAnalysis: string) => {
        return (
            certificateOfAnalysis && (
                <a
                    key={certificateOfAnalysis}
                    className={actionButton}
                    href={certificateOfAnalysis}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex>
                        <Icon
                            component={CertificateIcon}
                            style={{
                                color: WHITE,
                                fontSize: "40px",
                            }}
                        />
                        Cert. of Analysis
                    </Flex>
                </a>
            )
        );
    },
};

export const obtainLineColumn = {
    title: "",
    key: "orderLink",
    dataIndex: "orderLink",
    className: actionColumn,
    fixed: "right" as const,
    render: (orderLink: string) => {
        return (
            orderLink && (
                <a
                    key={orderLink}
                    className={actionButton}
                    href={orderLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex>
                        <Icon
                            className={tubeIcon}
                            component={Tube}
                            style={{
                                color: WHITE,
                                fontSize: "40px",
                            }}
                        />
                        Obtain Collection
                    </Flex>
                </a>
            )
        );
    },
};
