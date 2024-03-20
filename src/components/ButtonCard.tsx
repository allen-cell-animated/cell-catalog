import React from 'react';
import { Card } from 'antd';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

const { buttonCard } = require("../style/button-card.module.css");

interface ButtonCardProps {
    link?: string;
    title: string;
    className?: string;
    image: IGatsbyImageData | React.ReactNode;
}

const ButtonCard: React.FC<ButtonCardProps> = ({
    link,
    className,
    image,
    title
}) => {
    let cover;
    if (React.isValidElement(image)) {
        cover = image;
    } else if (image) {

        cover = <GatsbyImage image={image as IGatsbyImageData} alt={title} />;
    }
    const card = (
        <Card
            bordered={true}
            className={[className, buttonCard].join(" ")}
            title={title}
            cover={cover}
        />
    );
    if (link) {
        return (
            <a href={link} target="_blank" rel="noreferrer">
                {card}
            </a>)
    } else {
        return card
    }
};

export default ButtonCard;