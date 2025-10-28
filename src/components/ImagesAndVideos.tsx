import React, { useState, useEffect } from "react";
import { Card, Flex, Image, Space } from "antd";
import { ZoomOutOutlined, ZoomInOutlined } from "@ant-design/icons";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";
import { formatCellLineId } from "../utils";
import { RawVideoData, ImageOrVideo, UnpackedImageData } from "../component-queries/types";
import { isImage } from "../utils/mediaUtils";
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
    previewImage,
    toolbarWrapper,
    videoContainer,
    videoIframe,
} = require("../style/images-and-videos.module.css");

interface ImagesAndVideosProps {
    images: UnpackedImageData[];
    cellLineId: number;
    videos: RawVideoData[];
    geneSymbol: string;
    snp?: string;
    fluorescentTag: string;
    parentalGeneSymbol?: string;
    alleleTag: string;
}

const ImagesAndVideos: React.FC<ImagesAndVideosProps> = ({
    images,
    videos,
    cellLineId,
    fluorescentTag,
    parentalGeneSymbol,
    alleleTag,
    geneSymbol,
}) => {

    const getVideoId = (url: string) => {
        const match = url.match(/player\.vimeo\.com\/video\/(\d+)/);
        return match ? match[1] : null;
    };

    const mediaItems: ImageOrVideo[] = [...images, ...videos];
    const [selectedMedia, setSelectedMedia] = useState<ImageOrVideo | null>(
        mediaItems[0] || null
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [videoSrc, setVideoSrc] = useState<string>("");

    const showThumbnails = mediaItems.length > 1;

    // preload video iframe when selectedMedia changes
    useEffect(() => {
        if (selectedMedia && !isImage(selectedMedia)) {
            // clear src first to reset iframe
            setVideoSrc("");
            
            // set video src after a brief moment to allow iframe to initialize
            const timerId = setTimeout(() => {
                setVideoSrc(`${selectedMedia.video}?badge=0&autoplay=1&muted=1&loop=1&title=0`);
            }, 100);
            
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [selectedMedia]);

    if (!selectedMedia) return null;

    const imageItems = mediaItems.filter(isImage);
    const allPreviewImages = imageItems
        .map((item, i) => {
                return (
                    <Image
                        key={`preview-${i}`}
                        src={getSrc(item.image)}
                        style={{ display: "none" }}
                        className={previewImage}
                    />
                );
        });

    const renderThumbnail = (item: ImageOrVideo, index: number) => {
        const isSelected = selectedMedia === item;

        if (isImage(item)) {
            return (
                <Thumbnail
                    key={index}
                    image={item.image}
                    isSelected={isSelected}
                    onClick={() => {
                        setSelectedMedia(item);
                        setCurrentIndex(index);
                    }}
                    type="image"
                />
            );
        }

        const videoId = getVideoId(item.video) ?? "";

        return (
            <Thumbnail
                key={index}
                videoId={videoId}
                isSelected={isSelected}
                onClick={() => {
                    setSelectedMedia(item);
                    setCurrentIndex(index);
                }}
                type="video"
            />
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
        if (isImage(selectedMedia)) {
            return (
                <GatsbyImage
                    className={
                        showThumbnails
                            ? primaryImageWithThumbnail
                            : primaryImageOnly
                    }
                    image={selectedMedia.image}
                    alt="Cell line media"
                    imgStyle={{ objectFit: "contain" }}
                />
            );
        }

        return (
            <div
                className={`${showThumbnails ? primaryImageWithThumbnail : primaryImageOnly} ${videoContainer}`}
            >
                <iframe
                    src={videoSrc}
                    className={videoIframe}
                    title="Cell line video"
                    allowFullScreen
                ></iframe>
            </div>
        );
    };

    const handleMediaClick = () => {
        // only show preview for images, not videos
        if (isImage(selectedMedia)) {
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
                                const fullIndex = mediaItems.findIndex(item => item === imageItem);
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
