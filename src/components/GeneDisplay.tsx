import { Flex } from "antd";
import React from "react";

import { UnpackedGene } from "../component-queries/types";
import GeneSymbolTag from "./GeneSymbolTag";
import { TruncatedText } from "./TruncatedText";

interface GeneDisplayProps {
    gene: UnpackedGene;
}

const GeneDisplay: React.FC<GeneDisplayProps> = ({ gene }) => {
    return (
        <Flex wrap="nowrap" align="flex-end">
            <GeneSymbolTag symbol={gene.symbol} />
            <TruncatedText>{gene.name}</TruncatedText>
        </Flex>
    );
};

export default GeneDisplay;
