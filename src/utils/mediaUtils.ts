import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { RawImageData, UnpackedImageData, RawVideoData, MediaFrontMatter, ImageOrVideo } from "../component-queries/types";

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is UnpackedImageData {
  return "image" in item;
}

// flatten and validate image data
export function unpackImageData(
  x: RawImageData
): UnpackedImageData | null {
  return { image: x.image.childImageSharp.gatsbyImageData, caption: x.caption };
}

export const hasMedia = (rawMedia?: MediaFrontMatter): boolean => {
  return Boolean(rawMedia?.images?.length || rawMedia?.videos?.length);
};

export const getImages = (raw?: MediaFrontMatter): UnpackedImageData[] => {
  const media = (raw?.images ?? []);
  return media.map(unpackImageData)
    .filter((x): x is UnpackedImageData => x !== null);
}

export const getVideos = (rawMedia?: MediaFrontMatter): RawVideoData[] => {
  return rawMedia?.videos || [];
};

export const getThumbnail = (imagesAndVideos?: MediaFrontMatter): IGatsbyImageData | null => {
  const firstImage = getImages(imagesAndVideos)[0];
  return firstImage ? getImage(firstImage.image) ?? null : null;
};