import React, { useState } from "react";
import { Card, Flex, Image, Space } from "antd";
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
} = require("../style/images-and-videos.module.css");

interface ImagesAndVideosProps {
    images?: any[];
    cellLineId: number;
    parentalLine: ParentalLineFrontmatter;
    videos?: any;
    geneSymbol: string;
    snp: string;
    fluorescentTag: string;
    parentalGeneSymbol: string;
    alleleTag: string;
}

const ImagesAndVideos: React.FC<ImagesAndVideosProps> = ({
    images = [],
    cellLineId,
    fluorescentTag,
    parentalGeneSymbol,
    alleleTag,
    geneSymbol,
}) => {
    const [mainImage, setMainImage] = useState(images?.[0] || null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewVisible, setPreviewVisible] = useState(false);

    const hasMultipleImages = images?.length > 1;
    const thumbnails = images?.map((image, index) => {
        const renderImage = getImage(image?.image);
        if (renderImage) {
            return (
                <Thumbnail
                    key={index}
                    image={renderImage}
                    isSelected={mainImage === image}
                    onClick={() => {
                        setMainImage(image);
                        setCurrentIndex(index);
                    }}
                />
            );
        }
    });
    const primaryImageClassName = hasMultipleImages
        ? primaryImageWithThumbnail
        : primaryImageOnly;

    const imageData = getImage(mainImage.image);
    if (!imageData) {
        return null;
    }

    const allPreviewImages = images
        .map((img) => getImage(img?.image))
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

    const title = (
        <Flex
            justify="space-between"
            style={{ paddingTop: 24 }}
            className={header}
        >
            <div className={titleSection}>
                <h3 className={mainTitle}>{formatCellLineId(cellLineId)}</h3>
                <span className={subtitle}>
                    {geneSymbol} in WTC-{fluorescentTag}-{parentalGeneSymbol} (
                    {alleleTag}-allelic tag)
                </span>
            </div>
            <span className={rightTitle}>
                Representative images for all clones
            </span>
        </Flex>
    );

    return (
        <>
            <Image.PreviewGroup
                preview={{
                    visible: previewVisible,
                    className: previewImage,
                    current: currentIndex,
                    onVisibleChange: (visible) => setPreviewVisible(visible),
                    onChange: (index) => {
                        setCurrentIndex(index);
                        setMainImage(images[index]);
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
            <Card className={container} title={title}>
                <Flex
                    className={primaryImageContainer}
                    align="center"
                    vertical
                    justify="center"
                    gap={20}
                    onClick={() => setPreviewVisible(true)}
                >
                    <GatsbyImage
                        className={primaryImageClassName}
                        image={imageData}
                        alt="main image"
                        imgStyle={{ objectFit: "contain" }}
                    />
                    {mainImage.caption && (
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
            </Card>
        </>
    );
};

export default ImagesAndVideos;
