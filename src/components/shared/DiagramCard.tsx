import React from "react";
import { Card, CardProps } from "antd";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Diagram } from "../../component-queries/types";

const {
    diagramCard,
    diagramCardFooter,
} = require("../../style/disease-subpage.module.css");


interface DiagramCardProps extends CardProps {
    diagram: Diagram;
    headerLeadText?: string;
}

const DiagramCard: React.FC<DiagramCardProps> = ({
    diagram,
    headerLeadText,
    ...cardProps
}) => {
    const { title, caption } = diagram;
    const image = getImage(diagram.image.childImageSharp);

    const cardTitle = headerLeadText ? `${headerLeadText}: ${title}` : title;

    return (
        <Card {...cardProps} className={diagramCard} title={cardTitle}>
            {image && <GatsbyImage image={image} alt={title} />}
            {caption && <div className={diagramCardFooter}>{caption}</div>}
        </Card>
    );
};

export default DiagramCard;
