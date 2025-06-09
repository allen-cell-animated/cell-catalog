import React, { useState } from "react";
import { Card, Flex } from "antd";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { ParentalLineFrontmatter } from "../component-queries/types";
import { formatCellLineId } from "../utils";
import Thumbnail from "./Thumbnail";

const {
    container,
    header,
    titleSection,
    mainTitle,
    subtitle,
    rightTitle,
    caption,
    thumbnailContainer,
    primaryImageOnly,
    primaryImageWithThumbnail,
    primaryImageContainer,
} = require("../style/images-and-videos.module.css");

interface ImagesAndVideosProps {
    images?: any[];
    cellLineId?: number;
    parentalLine?: ParentalLineFrontmatter;
    videos?: any[];
    geneSymbol?: string;
    snp?: string;
    fluorescentTag?: string;
    parentalGeneSymbol?: string;
    alleleTag?: string;
}

const ImagesAndVideos: React.FC<ImagesAndVideosProps> = ({
    images = [],
    videos = [],
    cellLineId,
    fluorescentTag,
    parentalGeneSymbol,
    alleleTag,
    geneSymbol,
}) => {
    const hasImage = images?.length > 0;
    const hasVideo = videos?.length > 0;

    const [mainImage, setMainImage] = useState(hasImage ? images?.[0] : null);
    const hasMultipleImages = images?.length > 1;
    const thumbnails = images?.map((image, index) => {
        const renderImage = getImage(image?.image);
        if (renderImage) {
            return (
                <Thumbnail
                    key={index}
                    image={renderImage}
                    isSelected={mainImage === image}
                    onClick={() => setMainImage(image)}
                />
            );
        }
    });
    const primaryImageClassName = hasMultipleImages
        ? primaryImageWithThumbnail
        : primaryImageOnly;

    const imageData = mainImage?.image ? getImage(mainImage.image) : null;
    
    const getVimeoUrl = (url: string) => {
        if (url?.includes("player.vimeo.com")) {
            return url;
        }
        return url;
    };

    const videoList = hasVideo ? videos.map((video, index) => {
        const videoUrl = getVimeoUrl(video?.video);
        return (
            <div key={index}>
                <iframe
                    src={`${videoUrl}?badge=0&autoplay=0&title=0`}
                    width="400"
                    height="400"
                ></iframe>
                <p>{video?.caption}</p>
            </div>
        );
    }) : null;

    const title = (
        <Flex
            justify="space-between"
            style={{ paddingTop: 24 }}
            className={header}
        >
            <div className={titleSection}>
                {cellLineId && (<h3 className={mainTitle}>{formatCellLineId(cellLineId)}</h3>)}
                <span className={subtitle}>
                    {parentalGeneSymbol ? 
                        `${geneSymbol} in WTC-${fluorescentTag}-${parentalGeneSymbol} (${alleleTag}-allelic tag)` :
                        `${geneSymbol} in WTC-${fluorescentTag} (${alleleTag}-allelic tag)`
                    }
                </span>
            </div>
            <span className={rightTitle}>
                Representative images for all clones
            </span>
        </Flex>
    );

    return (
        <Card className={container} title={title}>
            {hasImage && imageData && (
                <>
                <Flex
                    className={primaryImageContainer}
                    align="center"
                    vertical
                    justify="center"
                    gap={20}
                >
                    <GatsbyImage
                        className={primaryImageClassName}
                        image={imageData}
                        alt="main image"
                        imgStyle={{ objectFit: "contain" }}
                    />
                    {mainImage?.caption && (
                        <p className={caption}>{mainImage.caption}</p>
                    )}
                </Flex>
                {hasMultipleImages && (
                    <Flex
                        vertical
                        style={{ minHeight: 0 }}
                        className={thumbnailContainer}
                    >
                        {thumbnails}
                    </Flex>
                )}
                </>
            )}
            {hasVideo && (
                <Flex
                    vertical
                    style={{ minHeight: 0 }}
                    className={thumbnailContainer}
                >
                    {videoList}
                </Flex>
            )}
        </Card>
    );
};

export default ImagesAndVideos;
