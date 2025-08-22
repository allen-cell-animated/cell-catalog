import React from "react";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { getCloneSummary, formatCellLineId } from "../../utils";
import { Clone, ParentLine } from "../../component-queries/types";
import { CellLineInfoCardRequiredProps } from "./types";
import { Divider } from "antd";
import { PRIMARY_COLOR } from "../../style/theme";
import CloneTable from "../CloneTable";
import GeneSymbolTag from "../GeneSymbolTag";

interface DiseaseCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    parentalLine: ParentLine;
    snp: string;
    clones: Clone[];
}

export const DiseaseCellLineInfoCard: React.FC<DiseaseCellLineInfoCardProps> = (
    props
) => {
    const buttonList = [
        {
            label: "Certificate of Analysis",
            href: props.certificateOfAnalysis,
        },
        {
            label: "hPSCreg Certificate",
            href: props.healthCertificate,
        },
    ];

    const infoRows = [
        { key: "1", label: "SNP", children: props.snp },
        {
            key: "2",
            label: "Gene Symbol",
            children: <GeneSymbolTag symbol={props.geneSymbol}/>,
        },
        { key: "3", label: "Gene Name", children: props.geneName },
        {
            key: "4",
            label: "Parental Line",
            children: `${formatCellLineId(props.parentalLine.cellLineId)} cl. ${
                props.parentalLine.cloneNumber
            } ${props.parentalLine.taggedGene[0].symbol}`,
        },
    ];

    const cloneSummary = getCloneSummary(props.clones);
    const buttonSubtitle = (
        <>
            <span style={{ fontWeight: 400 }}>{cloneSummary.numMutants}</span>
            <span style={{ fontWeight: 300 }}> mutant clones</span>
            <Divider type="vertical" style={{ borderColor: PRIMARY_COLOR }} />
            <span style={{ fontWeight: 400 }}>
                {cloneSummary.numIsogenics}
            </span>{" "}
            <span style={{ fontWeight: 300 }}>isogenic controls</span>
        </>
    );

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
            buttonSubtitle={buttonSubtitle}
            additionalInfo={<CloneTable dataSource={props.clones} />}
        />
    );
};
