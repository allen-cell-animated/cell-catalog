import React from "react";
import SubpageContent from "./Subpage";

interface StemCellCharacteristicsSubpageProps {
    stemCellCharacteristicsData: {
            clone_number: number;
            positive_cells: number;
    };
    diagrams?: Diagram[];
}

const StemCellCharacteristicsContent: React.FC<StemCellCharacteristicsSubpageProps> = ({
    stemCellCharacteristicsData,
}) => {
    const contentData = React.useMemo(
        () => ({
            rows: [
                {
                    label: `Clone cl. ${stemCellCharacteristicsData.clone_number}:`,
                    value: `${stemCellCharacteristicsData.positive_cells}% Troponin T positive cells`,
                },
            ],
        }),
        [stemCellCharacteristicsData]
    );

    return (
        <SubpageContent data={contentData} headerLeadText="Cardiomyocyte Differentiation"
        />
    );
};

export default StemCellCharacteristicsContent;
