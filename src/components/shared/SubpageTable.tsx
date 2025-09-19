import React from "react";
import { CardProps, Table } from "antd";
import classNames from "classnames";
import SubpageContentCard from "./SubpageContentCard";

const { container, table } = require("../../style/subpage-table.module.css");

export interface SubpageTableProps extends CardProps {
    title?: string;
    caption?: string;
    columns: any[];
    dataSource: any[];
}

const SubpageTable: React.FC<SubpageTableProps> = ({
    title,
    caption,
    className,
    columns,
    dataSource,
    ...cardProps
}) => {

    if (dataSource.length === 0) {
        return null;
    }

    return (
        <SubpageContentCard
            {...cardProps}
            title={title}
            caption={caption}
            className={classNames(container, className)}
        >
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered={false}
                className={table}
            />
        </SubpageContentCard>
    );
};

export default SubpageTable;
