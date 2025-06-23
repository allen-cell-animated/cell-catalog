import React, { useState } from "react";
import { Card, Flex, Image, Space } from "antd";
import Icon from "@ant-design/icons";
import { getImage, GatsbyImage, getSrc } from "gatsby-plugin-image";
import { ParentalLineFrontmatter } from "../component-queries/types";
import { formatCellLineId } from "../utils";
import Thumbnail from "./Thumbnail";
import { LeftOutlined, RightOutlined, ZoomOutOutlined, ZoomInOutlined, CloseOutlined } from "@ant-design/icons";

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
    previewImage,
    toolbarWrapper,
    playButton,
} = require("../style/images-and-videos.module.css");

const Play = require("../img/play.svg");

interface ImagesAndVideosProps {
    images?: any[];
    cellLineId: number;
    parentalLine?: ParentalLineFrontmatter;
    videos?: any[];
    geneSymbol?: string;
    snp?: string;
    fluorescentTag?: string;
    parentalGeneSymbol?: string;
    alleleTag?: string;
}

type MediaItem = {
    type: "image" | "video";
    data: any;
    caption?: string;
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
    const mediaArray = (): MediaItem[] => {
        const items: MediaItem[] = [];
        images?.forEach(img => {
            items.push({ type: "image", data: img, caption: img.caption });
        });

        videos?.forEach(vid => {
            items.push({ type: "video", data: vid, caption: vid.caption });
        });

        return items;
    };

    const getVimeoUrl = (url: string) => {
        if (url?.includes("player.vimeo.com")) {
            return url;
        }
        return url;
    };

    const mediaItems = mediaArray();
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(mediaItems[0] || null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewVisible, setPreviewVisible] = useState(false);

    const showThumbnails = mediaItems.length > 1; 

    if (!selectedMedia) return null;

    const imageItems = mediaItems.filter(item => item.type === "image");
    const allPreviewImages = imageItems
        .map((item) => getImage(item.data?.image))
        .filter(Boolean)
        .map((imgData, i) => {
            if (imgData !== undefined)
                return (
                    <Image
                        key={`preview-${i}`}
                        src={getSrc(imgData)}
                        style={{ display: "none" }}
                        className={previewImage}
                    />
                );
        });

    const renderThumbnail = (item: MediaItem, index: number) => {
        const isSelected = selectedMedia.data === item.data;

        if (item.type === "image") {
            const imageData = getImage(item.data?.image);
            if (!imageData) return null;

            return (
                <Thumbnail
                    key={index}
                    image={imageData}
                    isSelected={isSelected}
                    onClick={() => {
                        setSelectedMedia(item)
                        setCurrentIndex(index);
                    }}
                />
            );
        }

        return (
            <div
                key={index}
                className={`video-thumbnail ${isSelected ? "selected" : ""}`}
                onClick={() => {
                    setSelectedMedia(item)
                    setCurrentIndex(index);
                }}
            >
                <video width="80" height="60" muted>
                    <source src={item.data.url || item.data.src} type="video/mp4" />
                </video>
                <Icon className={playButton} component={Play}/>
            </div>
        );
    };

    const title = (
        <Flex
            justify="space-between"
            style={{ paddingTop: 24 }}
            className={header}
        >
            <div className={titleSection}>
                <h3 className={mainTitle}>{formatCellLineId(cellLineId)}</h3>
                <span className={subtitle}>
                    {parentalGeneSymbol ? 
                        `${geneSymbol} in WTC-${fluorescentTag}-${parentalGeneSymbol} (${alleleTag}-allelic tag)` :
                        `${geneSymbol} in WTC-${fluorescentTag} (${alleleTag}-allelic tag)`
                    }
                </span>
            </div>
            <span className={rightTitle}>
                Representative media for all clones
            </span>
        </Flex>
    );

    const renderMedia = () => {
        if (selectedMedia.type === "image") {
            const imageData = getImage(selectedMedia.data.image);
            if (!imageData) return null;

            return (
                <GatsbyImage
                    className={showThumbnails ? primaryImageWithThumbnail : primaryImageOnly}
                    image={imageData}
                    alt="Cell line media"
                    imgStyle={{ objectFit: "contain" }}
                />
            );
        }

        const vimeoUrl = getVimeoUrl(selectedMedia.data.video);
        return (
            <>
                <iframe
                    src={`${vimeoUrl}?badge=0&autoplay=0&title=0`}
                    width="400"
                    height="400"
                ></iframe>
                <p>{selectedMedia.data.video?.caption}</p>
            </>
        );
    };

    const handleMediaClick = () => {
        // TODO: now only show preview for images, not videos
        if (selectedMedia.type === "image") {
            setPreviewVisible(true);
        }
    };

    return (
        <>
            {imageItems.length > 0 && (
                <Image.PreviewGroup
                    preview={{
                        visible: previewVisible,
                        className: previewImage,
                        current: currentIndex,
                        onVisibleChange: (visible) => setPreviewVisible(visible),
                        onChange: (index) => {
                            const imageItem = imageItems[index];
                            if (imageItem) {
                                setSelectedMedia(imageItem);
                                const fullIndex = mediaItems.findIndex(item => item.data === imageItem.data);
                                setCurrentIndex(fullIndex);
                            }
                        },
                        toolbarRender: (
                            _,
                            {
                                transform: { scale },
                                actions: { onZoomIn, onZoomOut },
                            }
                        ) => (
                            <Space className={toolbarWrapper}>
                                <ZoomOutOutlined
                                    disabled={scale <= 1}
                                    onClick={onZoomOut}
                                />
                                <ZoomInOutlined
                                    disabled={scale >= 10}
                                    onClick={onZoomIn}
                                />
                            </Space>
                        ),
                    }}
                >
                    {allPreviewImages}
                </Image.PreviewGroup>
            )}

            <Card className={container} title={title}>
                <Flex
                    className={primaryImageContainer}
                    align="center"
                    vertical
                    justify="center"
                    gap={20}
                    onClick={handleMediaClick}
                >
                    {renderMedia()}
                        {selectedMedia.caption && (
                            <p className={caption}>{selectedMedia.caption}</p>
                        )}
                </Flex>
                {showThumbnails && (
                    <Flex
                        vertical
                        style={{ minHeight: 0 }}
                        className={thumbnailContainer}
                    >
                        {mediaItems.map(renderThumbnail).filter(Boolean)}
                    </Flex>
                )}
            </Card>
        </>
    );
};

export default ImagesAndVideos;