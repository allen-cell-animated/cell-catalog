import * as React from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Flex } from "antd";
import ButtonCard from "./ButtonCard";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

interface FeatureGridProps {
    gridItems: {
        image: string;
        text: string;
    }[];
}

const FeatureGrid = ({ gridItems }: FeatureGridProps) => (
    <div className="columns is-multiline">
        <Flex justify="space-evenly" align="center">
            {gridItems.map((item) => (
                <div key={item.text}>
                    <ButtonCard
                        title={item.text}
                        image={<PreviewCompatibleImage imageInfo={item} />}
                    />
                </div>
            ))}
        </Flex>
    </div>
);

export default FeatureGrid;
