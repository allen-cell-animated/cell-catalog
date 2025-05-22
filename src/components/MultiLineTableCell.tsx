import React from "react";
import { Typography, TooltipProps } from "antd";
import { UnpackedGene } from "../component-queries/types";
import GeneDisplay from "./GeneDisplay";

const { Text } = Typography;

const {
    tooltip,
    multipleLines,
    truncatedText,
} = require("../style/table.module.css");

export const getTooltipProps = (text: string): TooltipProps => {
    return { title: text, arrow: false, rootClassName: tooltip };
};

interface MultipleLineContainerProps {
    entries: string[] | UnpackedGene[];
    truncated?: boolean;
}

export const MultiLineTableCell: React.FC<MultipleLineContainerProps> = ({
    entries,
}) => {
    if (!entries || entries.length === 0) {
        return null;
    }

    const renderItems = entries.map((entry, idx) => {
        if (typeof entry === "string") {
            return (
                <Text
                    key={`${entry}-${idx}`}
                    className={truncatedText}
                    ellipsis={{
                        tooltip: getTooltipProps(entry),
                    }}
                >
                    {entry}
                </Text>
            );
        } else if (typeof entry === "object" && "name" in entry) {
            return <GeneDisplay key={entry.name} gene={entry} />;
        }
    });

    return <div className={multipleLines}>{renderItems}</div>;
};
