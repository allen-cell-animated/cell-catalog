import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

interface FeatureGridProps {
    gridItems: {
        image: string;
        text: string;
    }[];
}

const FeatureGrid = ({ gridItems }: FeatureGridProps) => (
    <div className="columns is-multiline">
        {gridItems.map((item) => (
            <div key={item.text} className="column is-6">
                <section className="section">
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: "240px",
                                display: "inline-block",
                            }}
                        >
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <p>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
);

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
        })
    ),
};

export default FeatureGrid;
