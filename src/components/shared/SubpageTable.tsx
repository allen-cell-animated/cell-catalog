import React from "react";
import { CardProps, Table } from "antd";
import classNames from "classnames";
import SubpageContentCard from "./SubpageContentCard";

const { container, table } = require("../../style/subpage-table.module.css");

export interface SubpageTable extends CardProps {
    title?: string;
    caption?: string;
    columns: any[];
    dataSource: any[];
}

const SubpageTable: React.FC<SubpageTable> = ({
    title,
    caption,
    className,
    columns,
    dataSource,
    ...cardProps
}) => {
    return (
        <SubpageContentCard
            {...cardProps}
            title={title}
            caption={caption}
            style={{ width: "min-content" }}
            className={classNames(container, className)}
        >
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered={false}
                className={table}
                style={{ width: "max-content", borderRadius: 0 }}
            />
        </SubpageContentCard>
    );
};

export default SubpageTable;
