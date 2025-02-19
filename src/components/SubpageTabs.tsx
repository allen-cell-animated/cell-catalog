import React from "react";
import { Tabs } from "antd";
import { SubPage } from "../types";
import { EditingDesign, GenomicCharacterization, StemCellCharacteristics } from "../templates/disease-cell-line";
import EditingDesignContent from "./EditingDesignSubpage";
import GenomicCharacterizationContent from "./GenomicCharacterizationSubpage";
import StemCellCharacteristicsContent from "./StemCellCharacteristicsSubpage";

const { container } = require("../style/subpage-tabs.module.css");

interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData: EditingDesign;
    genomicCharacterizationData: GenomicCharacterization;
    stemCellCharacteristicsData: StemCellCharacteristics;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    tabsToRender,
    editingDesignData,
    genomicCharacterizationData,
    stemCellCharacteristicsData,
}) => {
    // TODO: Swap out actual components for placeholders
    const tabComponents = {
        [SubPage.EditingDesign]: (
            <EditingDesignContent editingDesignData={editingDesignData} />
        ),
        [SubPage.GenomicCharacterization]: (
            <GenomicCharacterizationContent genomicCharacterizationData={genomicCharacterizationData} />
        ),
        [SubPage.StemCellCharacteristics]: (
            <StemCellCharacteristicsContent stemCellCharacteristicsData={stemCellCharacteristicsData} />
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
