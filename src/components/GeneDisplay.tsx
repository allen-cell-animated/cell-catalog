import React from "react";
import { Flex, Typography } from "antd";
import { UnpackedGene } from "../component-queries/types";
import { getTooltipProps } from "./MultiLineTableCell";
import GeneSymbolTag from "./GeneSymbolTag";

interface GeneDisplayProps {
    gene: UnpackedGene;
}

const { truncatedText } = require("../style/table.module.css");
const { Text } = Typography;

const GeneDisplay: React.FC<GeneDisplayProps> = ({ gene }) => {
    return (
        <Flex wrap="nowrap" align="flex-end">
            <GeneSymbolTag symbol={gene.symbol}/>
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
