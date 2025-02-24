import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { Diagram } from "../../component-queries/types";

const {
    container,
} = require("../../style/disease-subpage.module.css");

interface GenomicCharacterizationSubpageProps {
    diagrams?: Diagram[];
}

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {
    return (
        <div className={container}>
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