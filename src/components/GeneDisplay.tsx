import React from "react";
import { Flex, Tag, Typography } from "antd";
import { UnpackedGene } from "../component-queries/types";
interface GeneDisplayProps {
    gene: UnpackedGene;
}

const { truncatedText, tooltip } = require("../style/table.module.css");
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
                    tooltip: {
                        title: gene.name,
                        arrow: false,
                        rootClassName: tooltip,
                    },
                }}
            >
                {gene.name}
            </Text>
        </Flex>
    );
};

export default GeneDisplay;
