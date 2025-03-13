import React from "react";
import InfoPanel from "../shared/InfoPanel";
import SubpageContentCard from "../shared/SubpageContentCard";
import { DescriptionsProps } from "antd";
import { ClonePercentPositive } from "./types";

export interface StemCellCharProps {
    percentPositive?: ClonePercentPositive[];
    passingAntibodies?: any[];
    differentiation?: any[];
}

const StemCellChar: React.FC<StemCellCharProps> = ({ percentPositive }) => {
    const percentPositiveRows: DescriptionsProps["items"] = [];
    if (percentPositive && percentPositive.length > 0) {
        percentPositive.forEach((clone) => {
            percentPositiveRows.push({
                key: clone.cloneNumber,
                label: `No ${clone.cloneNumber}`,
                children: `${clone.value}%`,
            });
        });
    }
    return (
        <div>
            <SubpageContentCard>
                {percentPositiveRows.length && (
                    <InfoPanel data={percentPositiveRows} />
                )}
            </SubpageContentCard>
        </div>
    );
};

export default StemCellChar;
