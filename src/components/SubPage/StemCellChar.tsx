import React from "react";
import InfoPanel from "../shared/InfoPanel";
import SubpageContentCard from "../shared/SubpageContentCard";

export interface StemCellCharProps {
    percentTableData: any;
    antibodyTableData: any;
    differentiationTableData: any;
}

const StemCellChar: React.FC<StemCellCharProps> = ({ data }) => {
    return (
        <div>
            <SubpageContentCard>
                <InfoPanel data={rows} />
                {legendContent}
            </SubpageContentCard>
        </div>
    );
};

export default StemCellChar;
