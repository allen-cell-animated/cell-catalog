import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { Card } from "antd";

const { coriellWrapper } = require("../style/about.module.css");

interface AboutButtonProps {
    image: FileNode | JSX.Element;
    link: string;
    title: string;
    className?: string;
}

const AboutButton: React.FC<AboutButtonProps> = ({
    image,
    link,
    title,
    className,
}) => {
    const imageElement = React.isValidElement(image)
        ? image
        : (() => {
              const retrieved = getImage(image as FileNode);
              return retrieved ? (
                  <GatsbyImage image={retrieved} alt={title} />
              ) : null;
          })();

    if (!imageElement) return null;
    return (
        <div className={coriellWrapper}>
            {imageElement && (
                <a href={link} target="_blank" rel="noreferrer">
                    <Card className={className} title={title}>
                        {imageElement}
                    </Card>
                </a>
            )}
        </div>
    );
};

export default AboutButton;
