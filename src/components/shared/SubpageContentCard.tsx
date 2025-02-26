import React from "react";
import { Card, CardProps } from "antd";
import classNames from "classnames";

const {
    container,
    footer,
    borderBody,
    borderCard,
} = require("../../style/subpage-card.module.css");

interface SubpageContentCarProps extends CardProps {
    title?: string;
    caption?: string;
    children?: React.ReactNode;
}

const SubpageContentCard: React.FC<SubpageContentCarProps> = ({
    title,
    children,
    caption,
    ...cardProps
}) => {
    // include any className sent in
    // and if there is no title or caption, add a border to the body
    const className = classNames([
        container,
        cardProps.className,
        { [borderBody]: !caption && !title, [borderCard]: caption || title },
    ]);
    return (
        <Card {...cardProps} title={title} className={className}>
            {children}
            {caption && <div className={footer}>{caption}</div>}
        </Card>
    );
};

export default SubpageContentCard;
