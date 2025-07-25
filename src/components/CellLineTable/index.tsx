import React, { useState } from "react";
import { Table, Tag, Flex } from "antd";
import { navigate } from "gatsby";

import { CellLineStatus } from "../../component-queries/types";

import useWindowWidth from "../../hooks/useWindowWidth";
import { TABLET_BREAKPOINT } from "../../constants";
import { TableStatus, UnpackedCellLine } from "./types";
import useEnv from "../../hooks/useEnv";

const {
    tableTitle,
    container,
    comingSoon,
    hoveredRow,
    dataComplete,
} = require("../../style/table.module.css");

interface CellLineTableProps {
    tableName: string;
    cellLines: UnpackedCellLine[];
    released: boolean;
    columns: any;
    mobileConfig?: any;
    suppressRowClickRef?: React.MutableRefObject<boolean>;
}

const CellLineTable = ({
    tableName,
    cellLines,
    released,
    columns,
    mobileConfig,
    suppressRowClickRef,
}: CellLineTableProps) => {
    const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);

    const inProgress = !released;
    const width = useWindowWidth();
    const env = useEnv();
    const isTablet = width < TABLET_BREAKPOINT;

    const isClickable = (record: UnpackedCellLine): boolean => {
        if (suppressRowClickRef?.current) {
            return false;
        }
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
        return {
            ...column,
            sorter: inProgress ? undefined : column.sorter,
            onCell: inProgress ? undefined : onCellInteraction,
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
                showSorterTooltip={false}
                sortDirections={["ascend", "descend", "ascend"]}
            />
        </>
    );
};

export default CellLineTable;
