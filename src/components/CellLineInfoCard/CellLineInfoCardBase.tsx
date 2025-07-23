import React, { useState } from "react";
import { Card, Flex, Button, Divider, Tooltip } from "antd";
import Icon from "@ant-design/icons";

import { PRIMARY_COLOR } from "../../style/theme";
import { formatCellLineId } from "../../utils";
import CloneTable from "../CloneTable";
import { DarkThemeGhostButton, DefaultButton } from "../shared/Buttons";
import InfoPanel from "../shared/InfoPanel";
import { Clone } from "../../component-queries/types";
import { InfoTableRow } from "./types";

const Share = require("../../img/share-icon.svg");
const LinkOut = require("../../img/external-link.svg");

const {
    title,
    container,
    extraLargeButton,
} = require("../../style/cell-line-info-card.module.css");

interface CellLineInfoCardLayoutProps {
    href: string;
    cellLineId: number;
    infoRows: InfoTableRow[];
    certificateOfAnalysis: string;
    healthCertificate: string;
    orderLink: string;
    cloneSummary?: { numMutants: number; numIsogenics: number };
    clones?: Clone[];
    orderPlasmid?: string;
}

const CellLineInfoCardLayout = ({
    href,
    cellLineId,
    infoRows,
    certificateOfAnalysis,
    healthCertificate,
    orderLink,
    cloneSummary,
    clones,
    orderPlasmid,
}: CellLineInfoCardLayoutProps) => {
    const defaultToolTipText = "Copy cell line link to clipboard";
    const [shareTooltipText, setShareTooltipText] =
        useState(defaultToolTipText);

    const titleContents = (
        <Flex justify="space-between" align="center">
            <div className={title}>{formatCellLineId(cellLineId)}</div>
            <Tooltip title={shareTooltipText} placement="bottom">
                <DarkThemeGhostButton
                    onMouseEnter={() => {
                        if (!shareTooltipText) {
                            setShareTooltipText(defaultToolTipText);
                        }
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText(href).then(() => {
                            setShareTooltipText("Copied!");
                            setTimeout(() => {
                                setShareTooltipText("");
                            }, 1000);
                        });
                    }}
                >
                    Share
                    <Icon
                        component={Share}
                        style={{
                            fontSize: "18px",
                        }}
                    />
                </DarkThemeGhostButton>
            </Tooltip>
        </Flex>
    );
    return (
        <Card title={titleContents} className={container}>
            <InfoPanel data={infoRows} />
            {clones && <CloneTable dataSource={clones} />}
            <Flex vertical gap={8}>
                <DefaultButton
                    href={certificateOfAnalysis}
                    target="_blank"
                    rel="noreferrer"
                >
                    Certificate of Analysis
                </DefaultButton>
                <DefaultButton
                    href={healthCertificate}
                    target="_blank"
                    rel="noreferrer"
                >
                    hPSCreg Certificate
                </DefaultButton>
                {orderPlasmid && (
                    <DefaultButton
                        href={orderPlasmid}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Obtain Plasmid
                    </DefaultButton>
                )}
            </Flex>
            <Button
                type="primary"
                className={extraLargeButton}
                href={orderLink}
                target="_blank"
                rel="noreferrer"
            >
                <h2>
                    <Flex gap={8} align="center" justify="center">
                        Obtain {formatCellLineId(cellLineId)}
                        <LinkOut />
                    </Flex>
                </h2>
                {cloneSummary && (
                    <>
                        <span style={{ fontWeight: 400 }}>
                            {cloneSummary.numMutants}
                        </span>
                        <span style={{ fontWeight: 300 }}> mutant clones</span>
                        <Divider
                            type="vertical"
                            style={{ borderColor: PRIMARY_COLOR }}
                        />
                        <span style={{ fontWeight: 400 }}>
                            {cloneSummary.numIsogenics}
                        </span>{" "}
                        <span style={{ fontWeight: 300 }}>
                            isogenic controls
                        </span>
                    </>
                )}
            </Button>
        </Card>
    );
};

export default CellLineInfoCardLayout;
