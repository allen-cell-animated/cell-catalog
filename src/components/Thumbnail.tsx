import classNames from "classnames";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

const {
    selectedThumbnail,
    thumbnail,
    video,
    videoThumbnailImage,
} = require("../style/thumbnail.module.css");

interface ThumbnailProps {
    image?: IGatsbyImageData;
    videoId?: string;
    isSelected: boolean;
    onClick: () => void;
    type?: "image" | "video";
}

const getVimeoThumbnail = (videoId: string) => {
    return `https://vumbnail.com/${videoId}.jpg`;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
    image,
    isSelected,
    onClick,
    type = "image",
    videoId,
}) => {
    return (
        <div
            onClick={onClick}
            className={classNames(thumbnail, {
                [selectedThumbnail]: isSelected,
                [video]: type === "video",
            })}
            role="button"
        >
            {type === "image" && image ? (
                <GatsbyImage image={image} alt="thumbnail image" />
            ) : (
                <img
                    src={getVimeoThumbnail(videoId || "") ?? ""}
                    alt="Video thumbnail"
                    className={videoThumbnailImage}
                />
            )}
        </div>
    );
};

export default Thumbnail;
