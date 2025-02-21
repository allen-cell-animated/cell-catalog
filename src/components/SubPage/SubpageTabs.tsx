import React from "react";
import { Tabs } from "antd";
import { SubPage } from "../../types";
import { EditingDesign } from "../../templates/disease-cell-line";
import EditingDesignContent from "./EditingDesignSubpage";

const { container } = require("../../style/subpage-tabs.module.css");

interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData: EditingDesign;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    tabsToRender,
    editingDesignData,
}) => {
    // TODO: Swap out actual components for placeholders
    const tabComponents = {
        [SubPage.EditingDesign]: (
            <EditingDesignContent editingDesignData={editingDesignData} />
        ),
        [SubPage.GenomicCharacterization]: (
            <div>Genomic Characterization Content</div>
        ),
        [SubPage.StemCellCharacteristics]: (
            <div>Stem Cell Characteristics Content</div>
        ),
        [SubPage.Protocols]: <div>Protocols Content</div>,
    };

    return (
        <Tabs
            className={container}
            defaultActiveKey={SubPage.EditingDesign}
            items={tabsToRender.map((tabName) => ({
                // TODO: Render <TabName> is not yet available for this cell line
                // if the data doesn't exist
                label: tabName,
                key: tabName,
                children: tabComponents[tabName],
            }))}
        />
    );
};

export default SubpageTabs;
