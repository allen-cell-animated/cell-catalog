import React from "react";
import { Flex, Tabs } from "antd";
import { SubPage } from "../../types";
import EditingDesignSubpage from "./EditingDesign";
import GenomicCharacterization from "./GenomicCharacterization";
import StemCellChar, { StemCellCharProps } from "./StemCellChar";
import { UnpackedEditingDesign } from "./types";
import { DiagramCardProps } from "../shared/DiagramCard";

const {
    container,
    labelGroup,
} = require("../../style/subpage-tabs.module.css");

export interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData?: UnpackedEditingDesign;
    genomicCharacterizationData?: DiagramCardProps[];
    stemCellCharData: StemCellCharProps | null;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    tabsToRender,
    editingDesignData,
    genomicCharacterizationData,
    stemCellCharData,
}) => {
    const tabComponents = {
        [SubPage.EditingDesign]: (
            <EditingDesignSubpage {...editingDesignData} />
        ),
        [SubPage.GenomicCharacterization]: (
            <GenomicCharacterization
                diagrams={genomicCharacterizationData || []}
            />
        ),
        [SubPage.StemCellCharacteristics]: stemCellCharData ? (
            <StemCellChar {...stemCellCharData} />
        ) : (
            <>
                {SubPage.StemCellCharacteristics} is not yet available for this
                cell line.
            </>
        ),
        // TODO: add this once we have the data
        // [SubPage.Protocols]: <div>Protocols Content</div>,
    };

    return (
        <Tabs
            className={container}
            defaultActiveKey={SubPage.EditingDesign}
            items={tabsToRender.map((tabName) => {
                // TODO: Render <TabName> is not yet available for this cell line
                // if the data doesn't exist
                const label = tabName.split(" ").map((word) => {
                    return <span key={word}>{word}</span>;
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
