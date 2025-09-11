import React from "react";
import classNames from "classnames";
import DiagramCard from "../shared/DiagramCard";
import { UnpackedGenomicCharacterization as GenomicCharacterizationProps } from "./types";
import SubpageTable from "../shared/SubpageTable";
import { DDPCR_COLUMNS, CRRNA_OFF_TARGETS_COLUMNS, AMPLIFIED_JUNCTION_COLUMNS } from "./genomic-characterization-table-constants";

const {
    masonry,
    masonryItem,
    masonrySpanAll,
} = require("../../style/genomic-characterization.module.css");

const GenomicCharacterization: React.FC<GenomicCharacterizationProps> = ({
    diagrams,
    amplifiedJunctions,
    ddpcr,
    crRnaOffTargets,
}) => {

    return (
        <div className={masonry}>
            {amplifiedJunctions?.data.length ? (
                <SubpageTable
                    className={masonryItem}
                    title={"Amplified Junctions"}
                    columns={AMPLIFIED_JUNCTION_COLUMNS}
                    dataSource={amplifiedJunctions.data}
                    caption={amplifiedJunctions.caption}
                />
            ) : null}
            {ddpcr?.data.length ? (
                <SubpageTable
                    className={masonryItem}
                    title={"GFP and donor plasmid copy number"}
                    columns={DDPCR_COLUMNS}
                    dataSource={ddpcr.data}
                    caption={ddpcr.caption}
                />
            ) : null}
            {crRnaOffTargets?.data.length ? (
                <SubpageTable
                    className={masonryItem}
                    title={"crRNA Off-targets"}
                    columns={CRRNA_OFF_TARGETS_COLUMNS}
                    dataSource={crRnaOffTargets.data}
                    caption={crRnaOffTargets.caption}
                />
            ) : null}
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    className={classNames(
                        diagram.title?.includes("Sanger")
                            ? masonrySpanAll
                            : masonryItem
                    )}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image}
                />
            ))}
        </div>
    );
};

export default GenomicCharacterization;
