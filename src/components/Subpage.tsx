import React from "react";
import { Card, CardProps } from "antd";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Diagram } from "../types";

const {
    container,
    card,
    dataTable,
    dataRow,
    dataLabel,
    diagramsContainer,
    diagramCard,
    diagramCardHeader,
    diagramCardFooter,
    diagramImage,
    legendText,
} = require("../style/disease-supplemental-data.module.css");

export interface DataRow {
    label: string;
    value: string;
    formatClass?: string;
}

export interface SubpageProps {
    data: {
        rows: DataRow[];
        diagrams?: Diagram[];
        legendContent?: React.ReactNode;
    };
    headerLeadText?: string;
}

interface DiagramCardProps extends CardProps {
    title?: string;
    footer?: React.ReactNode;
}

export const DiagramCard: React.FC<DiagramCardProps> = ({
    children,
    title,
    footer,
    className,
}) => (
    <Card
        className={className}
        title={title && <div className={diagramCardHeader}>{title}</div>}
    >
        {children}
        {footer && <div className={diagramCardFooter}>{footer}</div>}
    </Card>
);

const formatTextWithGeneLocations = (text: string, className: string) => {
    // PAM sites and mutations are indicated in the string using square brackets
    const parts = text.split(/(\[.*?\])/);
    return parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
            return (
                <span key={index} className={className}>
                    {part}
                </span>
            );
        }
        return part;
    });
};

export const Subpage: React.FC<SubpageProps> = ({
    data,
    headerLeadText,
}) => {
    const renderDataRow = (row: DataRow) => (
        <div className={dataRow}>
            <span className={dataLabel}>
                {row.label}
                {/* intentional whitespace */}
                {`  `}
            </span>
            <span>
                {row.formatClass
                    ? formatTextWithGeneLocations(row.value, row.formatClass)
                    : row.value}
            </span>
        </div>
    );

    return (
        <div className={container}>
            <Card className={card}>
                <div className={dataTable}>{data.rows.map(renderDataRow)}</div>
                {data.legendContent && (
                    <div className={legendText}>{data.legendContent}</div>
                )}
            </Card>

            {data.diagrams && (
                <div className={diagramsContainer}>
                    {data.diagrams.map((diagram, index) => {
                        const image = getImage(diagram.image.childImageSharp);
                        const headerText = headerLeadText
                            ? `${headerLeadText}: ${diagram.title}`
                            : `${diagram.title}`;
                        return (
                            <DiagramCard
                                key={index}
                                className={diagramCard}
                                title={headerText}
                                footer={diagram.caption}
                            >
                                <div className={diagramImage}>
                                    {image && (
                                        <GatsbyImage
                                            image={image}
                                            alt={diagram.title}
                                        />
                                    )}
                                </div>
                            </DiagramCard>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Subpage;
