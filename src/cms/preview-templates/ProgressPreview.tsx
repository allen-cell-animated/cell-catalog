import { Steps } from "antd";
import React from "react";

import { CellLineStatus } from "../../component-queries/types";

interface ProgressPreviewProps {
    collection: string;
    status: CellLineStatus;
}
const ProgressPreview = ({ collection, status }: ProgressPreviewProps) => {
    const diseaseStatusMap = {
        [CellLineStatus.DataComplete]: 2,
        [CellLineStatus.Released]: 1,
        [CellLineStatus.InProgress]: 0,
    };
    const cellLineStatusMap = {
        [CellLineStatus.DataComplete]: 3,
        [CellLineStatus.Released]: 2,
        [CellLineStatus.InProgress]: 1,
        [CellLineStatus.Hide]: 0,
    };

    const diseaseLineStatus = [
        {
            title: "Initiated",
        },
        {
            title: "Released",
            description: "Visible on main table",
        },
        {
            title: "QC data finished",
            description: "Subpages are complete",
        },
    ];
    const cellLineStatus = [
        {
            title: "Initiated",
        },
        {
            title: "In Progress",
            description: "Visible but not clickable on the 'in progress' table",
        },
        {
            title: "Released",
            description: "Visible and clickable on main table",
        },
        {
            title: "QC data finished",
            description: "Subpages are complete",
        },
    ];
    const hideStatus = [
        {
            title: "Hide",
            description: "Entered data is saved and the line is hidden",
        },
    ];

    let statusList =
        collection === "disease" ? diseaseLineStatus : cellLineStatus;
    const statusMap =
        collection === "disease" ? diseaseStatusMap : cellLineStatusMap;
    let currentStatus = 0;
    if (status === CellLineStatus.Hide) {
        statusList = hideStatus;
    } else {
        currentStatus = statusMap[status];
    }
    return (
        <Steps
            style={{
                padding: "20px 50px 20px 20px",
                backgroundColor: "#f0f0f0",
            }}
            size="small"
            current={currentStatus}
            items={statusList.map((item) => ({
                title: item.title,
                description: item.description,
            }))}
        />
    );
};

export default ProgressPreview;
