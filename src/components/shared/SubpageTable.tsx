import React from "react";
import { CardProps, Table } from "antd";
import classNames from "classnames";
import SubpageContentCard from "./SubpageContentCard";


const {
    container,
    table,
    tableWrap,
    wOneThird,
    wHalf,
    wTwoThirds,
    wFull,
} = require("../../style/subpage-table.module.css");

type WidthPreset = "oneThird" | "half" | "twoThirds" | "full";

export interface SubpageTableProps extends CardProps {
    title?: string;
    caption?: string;
    columns: any[];
    dataSource: any[];
    /** oneThird | half | twoThirds | full */
    width?: WidthPreset;
    /** fixed card height (e.g. 420 or "420px"). Omit for auto height. */
    height?: number | string;
}

const widthToClass: Record<WidthPreset, string> = {
    oneThird: wOneThird,
    half: wHalf,
    twoThirds: wTwoThirds,
    full: wFull,
};

const SubpageTable: React.FC<SubpageTableProps> = ({
    title,
    caption,
    className,
    columns,
    dataSource,
    width = "half",
    height,
    ...cardProps
}) => {
    const cssHeight =
        typeof height === "number" ? `${height}px` : height ?? undefined;
        console.log("subpage render: ", dataSource, height)
    return (
        <SubpageContentCard
            {...cardProps}
            title={title}
            caption={caption}
            // style={{ width: "min-content" }}
            className={classNames(container, widthToClass[width], className)}
            style={{
                ...(cardProps.style || {}),
                // ...(cssHeight ? { ["--card-h" as any]: cssHeight } : {}),
            }}
        >
            <div className={tableWrap}>
                {/* <div>{cssHeight}</div> */}
                <Table
                    size="small"
                    columns={columns}
                    dataSource={dataSource}
                    pagination={false}
                    bordered={false}
                    className={table}
                />
            </div>
        </SubpageContentCard>
    );
};

export default SubpageTable;
