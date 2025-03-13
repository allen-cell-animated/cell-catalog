import React from "react";
import { Flex } from "antd";
import classNames from "classnames";
import DiagramCard, { DiagramCardProps } from "../shared/DiagramCard";

const {
    container,
    card,
    fullWidth,
} = require("../../style/genomic-characterization.module.css");

interface GenomicCharacterizationProps {
    diagrams: DiagramCardProps[];
}

const GenomicCharacterization: React.FC<GenomicCharacterizationProps> = ({
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
                    className={classNames(
                        card,
                        diagram.title?.includes("Sanger") ? fullWidth : ""
                    )}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image}
                />
            ))}
        </Flex>
    );
};

export default GenomicCharacterization;
