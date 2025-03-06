import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { GenomicCharacterizationData as GenomicCharacterizationSubpageProps } from "../../component-queries/types";
import { Flex } from "antd";

const {
    containerGrid,
} = require("../../style/disease-subpage.module.css");

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {
    return (
        <Flex className={containerGrid} gap={12} wrap="wrap" justify="center">
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    diagram={diagram}
                />
            ))}
        </Flex>
        
    );
};

export default GenomicCharacterizationSubpage;