import React from "react";
import InfoPanel from "../shared/InfoPanel";
import SubpageContentCard from "../shared/SubpageContentCard";
import { DescriptionsProps } from "antd";
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
        <div>
            {percentPositiveRows.length && (
                <SubpageTable
                    title={"Cardiomyocyte Differentiation"}
                    columns={percentPositiveTableColumns}
                    caption={percentPositiveCaption}
                    dataSource={percentPositiveRows}
                />
            )}
        </div>
    );
};

export default StemCellChar;
