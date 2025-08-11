import React from "react";
import { Tag } from "antd";

interface GeneSymbolTagProps {
    symbol: string;
}

const { tag } = require("../style/gene-symbol-tag.module.css");

const GeneSymbolTag: React.FC<GeneSymbolTagProps> = ({ symbol }) => {
    return (
        <Tag className={tag} bordered={false}>
            {symbol}
        </Tag>
    );
};

export default GeneSymbolTag;
