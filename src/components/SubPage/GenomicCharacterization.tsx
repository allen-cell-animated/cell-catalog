import React from "react";
import { Flex } from "antd";
import classNames from "classnames";
import { GenomicCharacterizationData as GenomicCharacterizationSubpageProps } from "../../component-queries/types";
import DiagramCard from "../shared/DiagramCard";

const {
    container,
    card,
    fullWidth,
} = require("../../style/genomic-characterization.module.css");

const GenomicCharacterizationSubpage: React.FC<GenomicCharacterizationSubpageProps> = ({
    diagrams,
}) => {

    diagrams?.forEach((diagram, index) => {
        console.log(diagram.title);
    }
    );

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
                    className={classNames(
                        card,
                        diagram.title.includes("Sanger") ? fullWidth : ""
                    )}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image.childImageSharp.gatsbyImageData}
                />
            ))}
        </Flex>
    );
};

export default GenomicCharacterizationSubpage;