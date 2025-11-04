import * as React from "react";

interface PreviewCompatibleImageProps {
    imageInfo: {
        alt?: string;
        // childImageSharp?: IGatsbyImageDataParent<Partial<Node>>;
        image?: string;
    };
    imageStyle?: React.CSSProperties;
}

// NOTE: The commented-out code is for Gatsby image handling, which we are currently not using
// and therefore it was hard to figure out how to correctly type it. I've commented it out for now,
// but if we decide to reintroduce Gatsby image handling, we will need to revisit this typing.
const PreviewCompatibleImage = ({
    imageInfo,
    imageStyle,
}: PreviewCompatibleImageProps) => {
    const { alt = "", image } = imageInfo;
    // if (!!image && !!image.childImageSharp) {
    // const gatsbyImage = image as { childImageSharp: ISharpGatsbyImageArgs };
    // return (
    //     <GatsbyImage
    //         image={gatsbyImage.childImageSharp.gatsbyImageData}
    //         style={imageStyle}
    //         alt={alt}
    //     />
    // );
    // } else if (childImageSharp) {
    //     return (
    //         <GatsbyImage
    //             image={childImageSharp.gatsbyImageData}
    //             style={imageStyle}
    //             alt={alt}
    //         />
    //     );
    // for Netlify CMS
    if (image && typeof image === "string") {
        return <img style={imageStyle} src={image} alt={alt} />;
    } else {
        return null;
    }
};

export default PreviewCompatibleImage;
