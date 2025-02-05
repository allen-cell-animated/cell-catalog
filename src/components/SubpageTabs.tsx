import React from "react";
import { Tabs } from "antd";

const { container } = require("../style/subpage-tabs.module.css");

// TODO: Swap out actual components for placeholders
const tabNames = [
    { name: "Editing Design", component: <div>Editing Design Content</div> },
    {
        name: "Genomic Characterization",
        component: <div>Genomic Characterization Content</div>,
    },
    {
        name: "Stem Cell Characteristics",
        component: <div>Stem Cell Characteristics Content</div>,
    },
    { name: "Protocols", component: <div>Protocols Content</div> },
];

const SubpageTabs: React.FC = () => (
    <Tabs
        className={container}
        defaultActiveKey="1"
        items={tabNames.map((data, i) => {
            const id = String(i + 1);
            return {
                label: data.name,
                key: id,
                children: data.component,
            };
        })}
    />
);

export default SubpageTabs;
