import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface RawImageData {
  image: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  caption: string;
}

export interface RawVideoData {
  video: string;
  caption: string;
}

export interface MediaFrontMatter {
  images?: RawImageData[];
  videos?: RawVideoData[];
}

export type ImageOrVideo = RawImageData | RawVideoData;

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is RawImageData {
  return "image" in item;
}

export const hasMedia = (rawMedia?: MediaFrontMatter): boolean => {
  return Boolean(rawMedia?.images?.length || rawMedia?.videos?.length);
};

export const getImages = (rawMedia?: MediaFrontMatter): RawImageData[] => {
  return rawMedia?.images || [];
};

export const getVideos = (rawMedia?: MediaFrontMatter): RawVideoData[] => {
  return rawMedia?.videos || [];
};

export const getThumbnail = (imagesAndVideos?: MediaFrontMatter): IGatsbyImageData | null => {
  const firstImage = getImages(imagesAndVideos)[0];
  return firstImage ? getImage(firstImage.image) ?? null : null;
};