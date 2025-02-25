import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { Diagram } from "../../component-queries/types";

const {
    containerGrid,
} = require("../../style/disease-subpage.module.css");

export interface GenomicCharacterizationSubpageProps {
    diagrams?: Diagram[];
}

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