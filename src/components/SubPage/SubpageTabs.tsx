import React from "react";
import { Flex, Tabs } from "antd";
import { SubPage } from "../../types";
import { UnpackedEditingDesignData, GenomicCharacterizationData } from "../../component-queries/types";
import EditingDesignSubpage from "./EditingDesignSubpage";
import GenomicCharacterizationSubpage from "./GenomicCharacterizationSubpage";

const {
    container,
    labelGroup,
} = require("../../style/subpage-tabs.module.css");

interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData?: UnpackedEditingDesignData;
    genomicCharacterizationData?: GenomicCharacterizationData;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    tabsToRender,
    editingDesignData,
    genomicCharacterizationData,
}) => {
    // TODO: Swap out actual components for placeholders
    const tabComponents = {
        [SubPage.EditingDesign]: (
            <EditingDesignSubpage {...editingDesignData}/>
        ),
        [SubPage.GenomicCharacterization]: (
            <GenomicCharacterizationSubpage {...genomicCharacterizationData}/>
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
            items={tabsToRender.map((tabName) => {
                // TODO: Render <TabName> is not yet available for this cell line
                // if the data doesn't exist
                const label = tabName.split(" ").map((word) => {
                    return <span>{word}</span>;
                });
                return {
                    label: (
                        <Flex
                            wrap
                            justify="center"
                            align="center"
                            className={labelGroup}
                        >
                            {label}
                        </Flex>
                    ),
                    key: tabName,
                    children: tabComponents[tabName],
                };
            })}
        />
    );
};

export default SubpageTabs;
