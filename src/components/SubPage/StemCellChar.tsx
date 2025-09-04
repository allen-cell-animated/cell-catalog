import React from "react";
import { Flex } from "antd";
import { UnpackedStemCellCharacteristics } from "./types";
import SubpageTable from "../shared/SubpageTable";
import {
    CARDIOMYOCYTE_COLUMNS,
    PERCENT_POS_COLUMNS,
    PLURIPOTENCY_COLUMNS,
    TRILINEAGE_COLUMNS,
} from "./stem-cell-table-constants";
import DiagramCard from "../shared/DiagramCard";

const { card } = require("../../style/genomic-characterization.module.css");

export interface StemCellCharProps {
    data: UnpackedStemCellCharacteristics;
}

const StemCellChar: React.FC<StemCellCharProps> = ({ data }) => {
    const {
        pluripotencyAnalysis,
        trilineageDifferentiation,
        cardiomyocyteDifferentiation,
        diseaseCardioMyocyteDifferentiation,
        rnaSeqAnalysis,
    } = data || {};
    const percentPositive =
        diseaseCardioMyocyteDifferentiation?.data?.flatMap(
            (item) => item.percentPositive ?? []
        ) ?? [];
    const percentPositiveRows = percentPositive.map((clone) => ({
        key: clone.cloneNumber,
        cloneNumber: clone.cloneNumber,
        value: `${clone.value}%`,
    }));
    // TODO: add passing antibodies and differentiation tables once we have the data
    return (
        <Flex gap={16} wrap="wrap" justify="space-between" align="baseline">
            {!!pluripotencyAnalysis?.data.length && (
                <SubpageTable
                    title="Pluripotency Analysis"
                    columns={PLURIPOTENCY_COLUMNS}
                    dataSource={pluripotencyAnalysis.data}
                    caption={pluripotencyAnalysis.caption}
                />
            )}

            {!!trilineageDifferentiation?.data.length && (
                <SubpageTable
                    title="Trilineage Differentiation"
                    columns={TRILINEAGE_COLUMNS}
                    dataSource={trilineageDifferentiation.data}
                    caption={trilineageDifferentiation.caption}
                />
            )}

            {!!cardiomyocyteDifferentiation?.data.length && (
                <SubpageTable
                    title="Cardiomyocyte Differentiation"
                    columns={CARDIOMYOCYTE_COLUMNS}
                    dataSource={cardiomyocyteDifferentiation.data}
                    caption={cardiomyocyteDifferentiation.caption}
                />
            )}
            {rnaSeqAnalysis?.map((image, index) => (
                <DiagramCard
                    key={index}
                    className={card}
                    title={image.title}
                    caption={image.caption}
                    image={image.image}
                />
            ))}
            {!!percentPositiveRows.length && (
                <SubpageTable
                    title="Cardiomyocyte Differentiation"
                    columns={PERCENT_POS_COLUMNS}
                    caption={diseaseCardioMyocyteDifferentiation?.caption}
                    dataSource={percentPositiveRows}
                />
            )}
        </Flex>
    );
};

export default StemCellChar;
