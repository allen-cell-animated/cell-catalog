import { IGatsbyImageData } from "gatsby-plugin-image";

export interface RawMediaData {
  images?: {
    image: any;
    caption: string;
  }[];
  videos?: {
    video: string;
    caption: string;
  }[];
}

export const hasMedia = (rawMedia?: RawMediaData): boolean => {
  return (rawMedia?.images?.length || 0) > 0 || (rawMedia?.videos?.length || 0) > 0;
};

export const getImages = (rawMedia?: RawMediaData) => {
  return rawMedia?.images || [];
};

export const getVideos = (rawMedia?: RawMediaData) => {
  return rawMedia?.videos || [];
};

export const getThumbnail = (imagesAndVideos?: { images?: Array<{ image: any; caption: string }> }): IGatsbyImageData | null => {
  const firstImage = imagesAndVideos?.images?.[0];
  if (!firstImage?.image?.childImageSharp?.gatsbyImageData) {
    return null;
  }
  return firstImage.image.childImageSharp.gatsbyImageData;
};