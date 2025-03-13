import React from "react";
import { CardProps, Flex, Table } from "antd";
import classNames from "classnames";
import SubpageContentCard from "./SubpageContentCard";

const { container } = require("../../style/diagram-card.module.css");

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
        <Flex>
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
                />
            </SubpageContentCard>
        </Flex>
    );
};

export default SubpageTable;
