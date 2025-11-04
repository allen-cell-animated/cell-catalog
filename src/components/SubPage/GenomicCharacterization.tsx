import { AnyObject } from "antd/es/_util/type";
import { ColumnsType } from "antd/es/table";
import React from "react";

import DiagramCard from "../shared/DiagramCard";
import SubpageTable from "../shared/SubpageTable";
import {
    AMPLIFIED_JUNCTION_COLUMNS,
    CRRNA_OFF_TARGETS_COLUMNS,
    DDPCR_COLUMNS,
} from "./genomic-characterization-table-constants";
import { UnpackedGenomicCharacterization as GenomicCharacterizationProps } from "./types";

const {
    masonry,
    masonryItem,
    masonrySpanAll,
} = require("../../style/subpage.module.css");

const GenomicCharacterization: React.FC<GenomicCharacterizationProps> = ({
    amplifiedJunctions,
    crRnaOffTargets,
    ddpcr,
    diagrams,
}) => {
    return (
        <div className={masonry}>
            {amplifiedJunctions ? (
                <SubpageTable
                    className={masonryItem}
                    title={"Amplified Junctions"}
                    columns={
                        AMPLIFIED_JUNCTION_COLUMNS as ColumnsType<AnyObject>
                    }
                    dataSource={amplifiedJunctions.data}
                    caption={amplifiedJunctions.caption}
                />
            ) : null}
            {ddpcr ? (
                <SubpageTable
                    className={masonryItem}
                    title={"GFP and donor plasmid copy number"}
                    columns={DDPCR_COLUMNS as ColumnsType<AnyObject>}
                    dataSource={ddpcr.data}
                    caption={ddpcr.caption}
                />
            ) : null}
            {crRnaOffTargets ? (
                <SubpageTable
                    className={masonryItem}
                    title={"crRNA Off-targets"}
                    columns={
                        CRRNA_OFF_TARGETS_COLUMNS as ColumnsType<AnyObject>
                    }
                    dataSource={crRnaOffTargets.data}
                    caption={crRnaOffTargets.caption}
                />
            ) : null}
            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    className={
                        diagram.title?.includes("Sanger")
                            ? masonrySpanAll
                            : masonryItem
                    }
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image}
                />
            ))}
        </div>
    );
};

export default GenomicCharacterization;
