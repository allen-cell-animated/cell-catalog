import React from "react";
import { CardProps } from "antd";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import SubpageContentCard from "./SubpageContentCard";

const { container } = require("../../style/diagram-card.module.css");

interface DiagramCardProps extends CardProps {
    title?: string;
    image?: IGatsbyImageData;
    caption?: string;
    headerLeadText?: string;
}

const DiagramCard: React.FC<DiagramCardProps> = ({
    title,
    image,
    caption,
    headerLeadText,
    ...cardProps
}) => {
    if (!image) {
        return null;
    }
    const imageData = getImage(image);

    const cardTitle = headerLeadText ? `${headerLeadText}: ${title}` : title;

    return (
        <SubpageContentCard
            {...cardProps}
            title={cardTitle}
            caption={caption}
            className={container}
        >
            {imageData && (
                <GatsbyImage image={imageData} alt={cardTitle || "diagram"} />
            )}
        </SubpageContentCard>
    );
};

export default DiagramCard;
