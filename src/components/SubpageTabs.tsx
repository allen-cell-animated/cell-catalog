import React from "react";
import { Tabs } from "antd";

const { container } = require("../style/subpage-tabs.module.css");

const tabNames = [
    "Editing Design",
    "Genomic Characterization",
    "Stem Cell Characteristics",
    "Protocols",
];

const SubpageTabs: React.FC = () => (
    <Tabs
        className={container}
        defaultActiveKey="1"
        items={tabNames.map((name, i) => {
            const id = String(i + 1);
            return {
                label: name,
                key: id,
                children: `Contents of ${name}`,
            };
        })}
    />
);

export default SubpageTabs;
