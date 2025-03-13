import React from "react";
import { Flex } from "antd";
import { ClonePercentPositive } from "./types";
import SubpageTable from "../shared/SubpageTable";
import {
    PERCENT_POS_CAPTION,
    PERCENT_POS_COLUMNS,
} from "./stem-cell-table-constants";

export interface StemCellCharProps {
    percentPositive: ClonePercentPositive[];
    passingAntibodies?: any[]; //TODO: type this once we have the data
    differentiation?: any[]; //TODO: type this once we have the data
}

const StemCellChar: React.FC<StemCellCharProps> = ({ percentPositive }) => {
    const percentPositiveRows = percentPositive.map((clone) => ({
        key: clone.cloneNumber,
        cloneNumber: `cl. ${clone.cloneNumber}`,
        value: `${clone.value}%`,
    }));
    // TODO: add passing antibodies and differentiation tables once we have the data
    return (
        <Flex>
            {percentPositiveRows.length && (
                <SubpageTable
                    title={"Cardiomyocyte Differentiation"}
                    columns={PERCENT_POS_COLUMNS}
                    caption={PERCENT_POS_CAPTION}
                    dataSource={percentPositiveRows}
                />
            )}
        </Flex>
    );
};

export default StemCellChar;
