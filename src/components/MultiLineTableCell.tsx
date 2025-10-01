import { Divider } from "antd";
import React from "react";

import { TruncatedText } from "./TruncatedText";

const {
    divider,
    infoCardMultiLineCell,
} = require("../style/cell-line-info-card.module.css");

const { tableMultiLineCell } = require("../style/table.module.css");

export enum ParentComponent {
    INFO_CARD = "info-card",
    TABLE = "table",
}

interface MultipleLineContainerProps {
    entries: string[];
    parent: ParentComponent;
    dividers?: boolean;
}

export const MultiLineTableCell: React.FC<MultipleLineContainerProps> = ({
    entries,
    parent,
    dividers,
}) => {
    if (!entries || entries.length === 0) {
        return null;
    }

    const className =
        parent === ParentComponent.INFO_CARD
            ? infoCardMultiLineCell
            : tableMultiLineCell;

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
