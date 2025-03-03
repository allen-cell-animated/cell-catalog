import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { GenomicCharacterizationData as GenomicCharacterizationSubpageProps } from "../../component-queries/types";

const {
    containerGrid,
} = require("../../style/diagram-card.module.css");

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {
    return (
        <div className={containerGrid}>
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    diagram={diagram}
                />
            ))}
        </div>
        
    );
};

export default GenomicCharacterizationSubpage;