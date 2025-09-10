import React from "react";
import { Flex } from "antd";
import { PluripotencyAnalysis, UnpackedStemCellCharacteristics } from "./types";
import SubpageTable from "../shared/SubpageTable";
import {
    CARDIOMYOCYTE_COLUMNS,
    PERCENT_POS_COLUMNS,
    TRILINEAGE_COLUMNS,
} from "./stem-cell-table-constants";
import DiagramCard from "../shared/DiagramCard";
import { ColumnsType } from "antd/es/table";

const { card } = require("../../style/genomic-characterization.module.css");

export function getPluripotencyColunms(data: PluripotencyAnalysis[]): {
    columns: ColumnsType<any>;
    dataSource: any[];
} {
    const columns: ColumnsType<any> = [
        {
            title: "Metric",
            dataIndex: "metric",
            key: "metric",
        },
        ...data.map((row) => ({
            title: row.marker,
            dataIndex: row.marker,
            key: row.marker,
        })),
    ];

    const dataSource = [
        {
            key: "positive",
            metric: "% positive cells",
            ...Object.fromEntries(
                data.map((row) => [
                    row.marker,
                    typeof row.positiveCells === "number"
                        ? `${row.positiveCells}%`
                        : row.positiveCells,
                ])
            ),
        },
    ];

    return { columns, dataSource };
}

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

    const flippedAxesPluripotency = pluripotencyAnalysis?.data
        ? getPluripotencyColunms(pluripotencyAnalysis.data)
        : null;

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
            {!!flippedAxesPluripotency && (
                <SubpageTable
                    title="Pluripotency Analysis"
                    columns={flippedAxesPluripotency.columns}
                    dataSource={flippedAxesPluripotency.dataSource}
                    caption={pluripotencyAnalysis?.caption}
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
