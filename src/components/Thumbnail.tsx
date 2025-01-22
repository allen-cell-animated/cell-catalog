import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import classNames from "classnames";

const {
    thumbnail,
    selectedThumbnail,
} = require("../style/thumbnail.module.css");

interface ThumbnailProps {
    image: IGatsbyImageData;
    isSelected: boolean;
    onClick: () => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
    image,
    isSelected,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={classNames(thumbnail, {
                [selectedThumbnail]: isSelected,
            })}
            role="button"
        >
            <GatsbyImage image={image} alt="thumbnail image" />
        </div>
    );
};

export default Thumbnail;
