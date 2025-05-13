import React, { useState } from "react";
import { Table, Tag, Flex } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { SorterResult, SortOrder } from "antd/es/table/interface";
import { navigate } from "gatsby";

import { HTMLContent } from "../shared/Content";
import { CellLineStatus } from "../../component-queries/types";

import useWindowWidth from "../../hooks/useWindowWidth";
import { TABLET_BREAKPOINT } from "../../constants";
import { TableStatus, UnpackedCellLine } from "./types";
import useEnv from "../../hooks/useEnv";

const {
    tableTitle,
    container,
    comingSoon,
    footer,
    hoveredRow,
    dataComplete,
    columnHeader,
    activeColumn,
} = require("../../style/table.module.css");

interface CellLineTableProps {
    tableName: string;
    cellLines: UnpackedCellLine[];
    footerContents: string;
    released: boolean;
    columns: any;
    mobileConfig?: any;
}

const CellLineTable = ({
    tableName,
    cellLines,
    footerContents,
    released,
    columns,
    mobileConfig,
}: CellLineTableProps) => {
    const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
    const [sortedColumn, setSortedColumn] = useState<{
        key: string;
        order: SortOrder;
    }>({ key: "cellLineId", order: "ascend" });

    const onSortingChange = (
        _p: any,
        _f: any,
        sorter:
            | SorterResult<UnpackedCellLine>
            | SorterResult<UnpackedCellLine>[]
    ) => {
        const s = Array.isArray(sorter) ? sorter[0] : sorter; // multi‑sort guard
        const sortedKey = s.columnKey?.toString() ?? "";
        const sortedOrder = s.order ?? null;
        setSortedColumn({ key: sortedKey, order: sortedOrder });
    };

    const inProgress = !released;
    const width = useWindowWidth();
    const env = useEnv();
    const isTablet = width < TABLET_BREAKPOINT;

    const isClickable = (record: UnpackedCellLine): boolean => {
        return (
            record.status === CellLineStatus.DataComplete ||
            env !== "production"
        );
    };
    const onCellInteraction = (
        record: UnpackedCellLine,
        index: number | undefined
    ): {} => {
        // creates a hover effect for the whole row, and takes the user to
        // the sub-page for the cell line. The reason
        // this couldn't be done at the row level, is that we have
        // two columns that are independently clickable and therefore
        // clicking on them shouldn't trigger the page change
        if (index === undefined) {
            return {};
        }
        return {
            className: index === hoveredRowIndex ? hoveredRow : "",
            onMouseEnter: () => setHoveredRowIndex(index),
            onMouseLeave: () => setHoveredRowIndex(-1),
            onClick: () => {
                // if we are not in production, make it easier to
                // navigate to the cell line page
                if (isClickable(record)) {
                    navigate(record.path);
                }
            },
        };
    };

    const interactiveColumns = columns.map((column: any) => {
        // the two clickable columns are the order cell line and
        // CoA column. They do not have the hover effect and
        // should not take you to the cell line page, and are not
        // sortable.
        if (column.className?.includes("action-column")) {
            return column;
        }
        const isSortedColumn = sortedColumn.key === column.key;
        const sortIcon =
            isSortedColumn && sortedColumn.order === "descend" ? (
                <CaretUpOutlined />
            ) : (
                <CaretDownOutlined />
            );
        // reverse sort direction for first column so that
        // it toggles on first selection
        const sortDirections =
            column.key === "cellLineId"
                ? ["descend", "ascend", "descend"]
                : ["ascend", "descend", "ascend"];
        return {
            ...column,
            title: (
                <div className={columnHeader}>
                    {column.title} {sortIcon}
                </div>
            ),
            className: isSortedColumn ? activeColumn : "",
            sortDirections: sortDirections,
            onCell: onCellInteraction,
        };
    });

    return (
        <>
            <Table
                key={tableName}
                className={[container, inProgress ? comingSoon : ""].join(" ")}
                rowClassName={(record) =>
                    isClickable(record) ? dataComplete : ""
                }
                title={() => (
                    <Flex align="center">
                        <h3 className={tableTitle}>{tableName}</h3>
                        {inProgress ? (
                            <Tag color="#00215F" style={{ color: "#fff" }}>
                                {TableStatus.ComingSoon}
                            </Tag>
                        ) : null}
                    </Flex>
                )}
                scroll={{ x: "max-content" }}
                pagination={false}
                expandable={isTablet ? mobileConfig : undefined}
                columns={interactiveColumns}
                dataSource={cellLines}
                onChange={onSortingChange}
                showSorterTooltip={false}
            />
            <div className={footer}>
                <HTMLContent content={footerContents} />
            </div>
        </>
    );
};

export default CellLineTable;
