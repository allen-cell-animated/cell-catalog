import React from "react";
import DiagramCard from "../shared/DiagramCard";
import { GenomicCharacterizationData as GenomicCharacterizationSubpageProps } from "../../component-queries/types";
import { Flex } from "antd";

const {
    container,
    card,
} = require("../../style/genomic-characterization.module.css");

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {
    return (
        <Flex
            className={container}
            gap={40}
            wrap="wrap"
            justify="space-between"
            align="baseline"
        >
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    className={card}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image.childImageSharp.gatsbyImageData}
                />
            ))}
        </Flex>
    );
};

export default GenomicCharacterizationSubpage;