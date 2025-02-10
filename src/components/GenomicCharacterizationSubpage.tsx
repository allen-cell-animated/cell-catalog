import React from "react";
import SubpageContent from "./Subpage";
import { Diagram } from "../types";

interface GenomicCharacterizationSubpageProps {
    genomicCharacterizationData: {
        diagrams: Diagram[];
    };
}

const GenomicCharacterizationContent: React.FC<GenomicCharacterizationSubpageProps> = ({
    genomicCharacterizationData,
}) => {
    const contentData = React.useMemo(() => {
        return {
            diagrams: genomicCharacterizationData.diagrams.map((diagram) => ({
                image: diagram.image,
                title: diagram.title,
                caption: diagram.caption
            }))
        };
    }, [genomicCharacterizationData]);

    return (
        <SubpageContent data={contentData}
        />
    );
};

export default GenomicCharacterizationContent;