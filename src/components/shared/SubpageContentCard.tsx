import { Card, CardProps } from "antd";
import classNames from "classnames";
import React from "react";

const { Meta } = Card;

const {
    container,
    borderBody,
    borderCard,
} = require("../../style/subpage-content-card.module.css");

interface SubpageContentCardProps extends CardProps {
    title?: string;
    caption?: string;
    children?: React.ReactNode;
}

const SubpageContentCard: React.FC<SubpageContentCardProps> = ({
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
            {caption && <Meta description={caption} />}
        </Card>
    );
};

export default SubpageContentCard;
