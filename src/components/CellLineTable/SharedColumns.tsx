import Icon from "@ant-design/icons";
import { Flex, Tooltip } from "antd";
import classNames from "classnames";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import { CellLineStatus } from "../../component-queries/types";
import { WHITE } from "../../style/theme";
import { formatCellLineId } from "../../utils";
import TubeIcon from "../Icons/TubeIcon";
import { UnpackedCellLine, mdBreakpoint } from "./types";

const CertificateIcon = require("../../img/cert-icon.svg");

const {
    actionButton,
    actionColumn,
    cellLineId,
    certIcon,
    disabled,
    idHeader,
    thumbnailContainer,
} = require("../../style/table.module.css");

export const cellLineIdColumn = {
    title: "Cell Collection ID",
    key: "cellLineId",
    className: cellLineId,
    dataIndex: "cellLineId",
    fixed: "left" as const,
    render: (cellLineId: number, record: UnpackedCellLine) => {
        const cellLine = (
            <h4 key={cellLineId}>{formatCellLineId(cellLineId)}</h4>
        );
        const thumbnailImage = getImage(record.thumbnailImage || null);

        const content = thumbnailImage ? (
            <>
                <div className={idHeader}>{cellLine}</div>
                <div className={thumbnailContainer}>
                    <GatsbyImage
                        image={thumbnailImage}
                        alt={`${cellLine} thumbnail`}
                    />
                </div>
            </>
        ) : (
            cellLine
        );

        return record.status === CellLineStatus.DataComplete ? (
            <Link to={record.path}>{content}</Link>
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
                            className={certIcon}
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
        const isDisabled = !orderLink;
        const link = (
            <a
                key={orderLink}
                className={classNames(actionButton, {
                    [disabled]: isDisabled,
                })}
                href={isDisabled ? undefined : orderLink}
                target="_blank"
                rel="noreferrer"
            >
                <Flex>
                    <TubeIcon />
                    Obtain Collection
                </Flex>
            </a>
        );
        return isDisabled ? (
            <Tooltip title="This collection not yet available">{link}</Tooltip>
        ) : (
            link
        );
    },
};
