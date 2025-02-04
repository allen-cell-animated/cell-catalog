import React from "react";
import { Tabs } from "antd";

const tabNames = [
    "Editing Design",
    "Genomic Characterization",
    "Stem Cell Characteristics",
    "Protocols",
];

const SubpageTabs: React.FC = () => (
    <Tabs
        defaultActiveKey="1"
        centered
        items={tabNames.map((_, i) => {
            const id = String(i + 1);
            return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`,
            };
        })}
    />
);

export default SubpageTabs;
