import React from "react";
import { Flex } from "antd";
import classNames from "classnames";
import DiagramCard from "../shared/DiagramCard";
import { UnpackedGenomicCharacterization as GenomicCharacterizationProps } from "./types";
import SubpageTable from "../shared/SubpageTable";
import { DDPCR_COLUMNS, CRRNA_OFF_TARGETS_COLUMNS, AMPLIFIED_JUNCTION_COLUMNS } from "./genomic-characterization-table-constants";

const {
    card,
    fullWidth,
} = require("../../style/genomic-characterization.module.css");

const GenomicCharacterization: React.FC<GenomicCharacterizationProps> = ({
    diagrams,
    amplifiedJunctions,
    ddpcr,
    crRnaOffTargets,
}) => {

    return (
        <Flex gap={40} wrap="wrap" justify="space-between" align="baseline">
            {amplifiedJunctions?.data.length ? (
                <SubpageTable
                    title={"Amplified Junctions"}
                    columns={AMPLIFIED_JUNCTION_COLUMNS}
                    dataSource={amplifiedJunctions.data}
                    caption={amplifiedJunctions.caption}
                />
            ) : null}
            {ddpcr?.data.length ? (
                <SubpageTable
                    title={"GFP and donor plasmid copy number"}
                    columns={DDPCR_COLUMNS}
                    dataSource={ddpcr.data}
                    caption={ddpcr.caption}
                />
            ) : null}
            {crRnaOffTargets?.data.length ?  (
                <SubpageTable
                    title={"crRNA Off-targets"}
                    columns={CRRNA_OFF_TARGETS_COLUMNS}
                    dataSource={crRnaOffTargets.data}
                    caption={crRnaOffTargets.caption}
                />
            ) : null}
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    className={classNames(
                        card,
                        diagram.title?.includes("Sanger") ? fullWidth : ""
                    )}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image}
                />
            ))}
        </Flex>
    );
};

export default GenomicCharacterization;
