import { getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface RawImageData {
  image: {
    childImageSharp?: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  caption: string;
}

interface RawImageWithData {
  image: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
  caption: string;
};

export interface ValidatedImageData {
  image: IGatsbyImageData;
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

export type ImageOrVideo = ValidatedImageData | RawVideoData;

// type guard to ensure image data is defined
export function hasGatsbyImageData(x: RawImageData): x is RawImageWithData {
  return !!x.image.childImageSharp?.gatsbyImageData;
}

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is ValidatedImageData {
  return "image" in item;
}

// flatten and validate image data
export function toValidatedImageData(
  x: RawImageData
): ValidatedImageData | null {
  return hasGatsbyImageData(x)
    ? { image: x.image.childImageSharp.gatsbyImageData, caption: x.caption }
    : null;
}

export const hasMedia = (rawMedia?: MediaFrontMatter): boolean => {
  return Boolean(rawMedia?.images?.length || rawMedia?.videos?.length);
};

export const getImages = (raw?: MediaFrontMatter): ValidatedImageData[] => {
  const media = (raw?.images ?? []);
  return media.map(toValidatedImageData)
    .filter((x): x is ValidatedImageData => x !== null);
}

export const getVideos = (rawMedia?: MediaFrontMatter): RawVideoData[] => {
  return rawMedia?.videos || [];
};

export const getThumbnail = (imagesAndVideos?: MediaFrontMatter): IGatsbyImageData | null => {
  const firstImage = getImages(imagesAndVideos)[0];
  return firstImage ? getImage(firstImage.image) ?? null : null;
};