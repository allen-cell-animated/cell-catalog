import React from "react";
import { Flex, Tag, Typography } from "antd";
import { UnpackedGene } from "../component-queries/types";
import { getTooltipProps } from "./CellLineTable/NormalTableColumns";

interface GeneDisplayProps {
    gene: UnpackedGene;
}

const { truncatedText } = require("../style/table.module.css");
const { Text } = Typography;

const GeneDisplay: React.FC<GeneDisplayProps> = ({ gene }) => {
    return (
        <Flex wrap="nowrap" align="flex-end">
            <Tag bordered={false} color="#DFE5EA">
                {gene.symbol}
            </Tag>
            <Text
                className={truncatedText}
                ellipsis={{
                    tooltip: getTooltipProps(gene.name),
                }}
            >
                {gene.name}
            </Text>
        </Flex>
    );
};

export default GeneDisplay;
