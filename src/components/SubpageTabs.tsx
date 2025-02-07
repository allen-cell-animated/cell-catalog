import React from "react";
import { Tabs } from "antd";
import { SubPage } from "../types";

const { container } = require("../style/subpage-tabs.module.css");

// TODO: Swap out actual components for placeholders
const tabComponents = {
    [SubPage.EditingDesign]: <div>Editing Design Content</div>,
    [SubPage.GenomicCharacterization]: (
        <div>Genomic Characterization Content</div>
    ),
    [SubPage.StemCellCharacteristics]: (
        <div>Stem Cell Characteristics Content</div>
    ),
    [SubPage.Protocols]: <div>Protocols Content</div>,
};

interface SubpageTabsProps {
    tabsToRender: SubPage[];
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({ tabsToRender }) => (
    <Tabs
        className={container}
        defaultActiveKey={SubPage.EditingDesign}
        items={tabsToRender.map((tabName) => {
            // TODO: Render <TabName> is not yet available for this cell line
            // if the data doesn't exist
            return {
                label: tabName,
                key: tabName,
                children: tabComponents[tabName],
            };
        })}
    />
);

export default SubpageTabs;
