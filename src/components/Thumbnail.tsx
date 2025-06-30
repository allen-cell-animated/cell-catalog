import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import classNames from "classnames";

const {
    thumbnail,
    selectedThumbnail,
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
    videoId,
    isSelected,
    onClick,
    type = "image",
}) => {
    return (
        <div
            onClick={onClick}
            className={classNames(thumbnail, {
                [selectedThumbnail]: isSelected,
            })}
            role="button"
        >
            {type === "image" && image ? (
                <GatsbyImage image={image} alt="thumbnail image" />
            ) : (
                <img
                    src={getVimeoThumbnail(videoId || "") ?? ""}
                    alt="Video thumbnail"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        display: "block",
                    }}
                />
            )}
        </div>
    );
};

export default Thumbnail;
