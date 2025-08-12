import React from "react";
import { TruncatedText } from "./TruncatedText";
import { Divider } from "antd";

const { divider } = require("../style/cell-line-info-card.module.css");

interface MultipleLineContainerProps {
    entries: string[];
    className?: string;
    dividers?: boolean;
}

export const MultiLineTableCell: React.FC<MultipleLineContainerProps> = ({
    entries,
    className,
    dividers,
}) => {
    if (!entries || entries.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            {entries.map((entry, idx) => {
                return (
                    <React.Fragment key={`${entry}-${idx}`}>
                        <TruncatedText>{entry}</TruncatedText>
                        {dividers && idx < entries.length - 1 && (
                            <Divider className={divider} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
