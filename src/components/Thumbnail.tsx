import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import classNames from "classnames";

const {
    thumbnail,
    selectedThumbnail,
} = require("../style/thumbnail.module.css");

interface ThumbnailProps {
    image?: IGatsbyImageData;
    videoUrl?: string;
    isSelected: boolean;
    onClick: () => void;
    type?: "image" | "video";
}

const getVimeoThumbnail = (vimeoUrl: string) => {
    const match = vimeoUrl.match(/vimeo\.com\/video\/(\d+)/) ||
        vimeoUrl.match(/player\.vimeo\.com\/video\/(\d+)/) ||
        vimeoUrl.match(/vimeo\.com\/(\d+)/);

    if (match) {
        const videoId = match[1];
        return `https://vumbnail.com/${videoId}.jpg`;
    }
    return null;
};


const Thumbnail: React.FC<ThumbnailProps> = ({
    image,
    videoUrl,
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
                    src={getVimeoThumbnail(videoUrl || "") ?? ""}
                    alt="Video thumbnail"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                    }}
                />
            )}
        </div>
    );
};

export default Thumbnail;
