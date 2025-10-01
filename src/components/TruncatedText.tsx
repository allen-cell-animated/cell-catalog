import { TooltipProps, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const { tooltip } = require("../style/truncated-text.module.css");

interface TruncatedTextProps {
    children: string;
}

export const getTooltipProps = (text: string): TooltipProps => {
    return { title: text, arrow: false, rootClassName: tooltip };
};

export const TruncatedText: React.FC<TruncatedTextProps> = ({ children }) => (
    <Text ellipsis={{ tooltip: getTooltipProps(children) }}>{children}</Text>
);
