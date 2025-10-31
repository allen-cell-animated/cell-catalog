import * as React from "react";
import { GatsbyImage, ISharpGatsbyImageArgs } from "gatsby-plugin-image";

interface PreviewCompatibleImageProps {
    imageInfo: {
        alt?: string;
        childImageSharp?: IGatsbyImageDataParent<Partial<Node>>;
        image?: string | { childImageSharp: ISharpGatsbyImageArgs };
    };
    imageStyle?: React.CSSProperties;
}

const PreviewCompatibleImage = ({
    imageInfo,
    imageStyle,
}: PreviewCompatibleImageProps) => {
    const { alt = "", childImageSharp, image } = imageInfo;
    if (!!image && !!image.childImageSharp) {
        const gatsbyImage = image as { childImageSharp: ISharpGatsbyImageArgs };
        return (
            <GatsbyImage
                image={gatsbyImage.childImageSharp.gatsbyImageData}
                style={imageStyle}
                alt={alt}
            />
        );
    } else if (childImageSharp) {
        return (
            <GatsbyImage
                image={childImageSharp.gatsbyImageData}
                style={imageStyle}
                alt={alt}
            />
        );
        // for Netlify CMS
    } else if (image && typeof image === "string") {
        return <img style={imageStyle} src={image} alt={alt} />;
    } else {
        return null;
    }
};

export default PreviewCompatibleImage;
