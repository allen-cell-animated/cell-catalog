import React from "react";
import { Typography, TooltipProps } from "antd";

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
    entries: string[];
    truncated?: boolean;
}

export const MultiLineTableCell: React.FC<MultipleLineContainerProps> = ({
    entries,
}) => {
    if (!entries || entries.length === 0) {
        return null;
    }

    return (
        <div className={multipleLines}>
            {entries.map((entry, idx) => {
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
            })}
        </div>
    );
};
