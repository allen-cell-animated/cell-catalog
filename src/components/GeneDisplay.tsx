import React from "react";
import { Flex, Tag } from "antd";
import { UnpackedGene } from "../component-queries/types";

interface GeneDisplayProps {
    gene: UnpackedGene;
}

const {
    geneName,
} = require("../style/table.module.css");

const GeneDisplay: React.FC<GeneDisplayProps> = ({ gene }) => {
    return (
        <Flex wrap="nowrap" align="flex-end">
            <Tag bordered={false} color="#DFE5EA">
                {gene.symbol}
            </Tag>
            <div className={geneName}>{gene.name}</div>
        </Flex>
    );
};

export default GeneDisplay;
