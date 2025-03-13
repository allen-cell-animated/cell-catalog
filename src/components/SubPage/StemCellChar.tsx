import React from "react";
import { Flex } from "antd";
import { ClonePercentPositive } from "./types";
import SubpageTable from "../shared/SubpageTable";
import {
    percentPositiveCaption,
    percentPositiveTableColumns,
} from "./stem-cell-table-constants";

export interface StemCellCharProps {
    percentPositive: ClonePercentPositive[];
    passingAntibodies?: any[];
    differentiation?: any[];
}

const StemCellChar: React.FC<StemCellCharProps> = ({ percentPositive }) => {
    const percentPositiveRows = percentPositive.map((clone) => ({
        key: clone.cloneNumber,
        cloneNumber: `cl. ${clone.cloneNumber}`,
        value: `${clone.value}%`,
    }));

    return (
        <Flex>
            {percentPositiveRows.length && (
                <SubpageTable
                    title={"Cardiomyocyte Differentiation"}
                    columns={percentPositiveTableColumns}
                    caption={percentPositiveCaption}
                    dataSource={percentPositiveRows}
                />
            )}
        </Flex>
    );
};

export default StemCellChar;
