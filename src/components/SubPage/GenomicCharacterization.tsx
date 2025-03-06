import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { GenomicCharacterizationData as GenomicCharacterizationSubpageProps } from "../../component-queries/types";
import { Flex } from "antd";

const {
    containerFlex,
} = require("../../style/genomic-characterization.module.css");

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {
    return (
        <Flex className={containerFlex} gap={12} wrap="wrap" justify="space-between">
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