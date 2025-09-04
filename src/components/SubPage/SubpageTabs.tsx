import React from "react";
import { Flex, Tabs } from "antd";
import { SubPage } from "../../types";
import EditingDesignSubpage from "./EditingDesign";
import GenomicCharacterization from "./GenomicCharacterization";
import StemCellChar from "./StemCellChar";
import {
    UnpackedEditingDesign,
    UnpackedStemCellCharacteristics,
} from "./types";
import { DiagramCardProps } from "../shared/DiagramCard";

const {
    container,
    labelGroup,
    noData,
} = require("../../style/subpage-tabs.module.css");

export interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData: UnpackedEditingDesign | null;
    genomicCharacterizationData?: DiagramCardProps[];
    stemCellCharacteristics: UnpackedStemCellCharacteristics | null;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    tabsToRender,
    editingDesignData,
    genomicCharacterizationData,
    stemCellCharacteristics,
}) => {
    const getNoDataComponent = (tab: SubPage) => {
        return (
            <div className={noData}>
                {`<${tab}>`} is not yet available for this cell line.
            </div>
        );
    };

    const hasSCCTables = (scc?: UnpackedStemCellCharacteristics | null) =>
        !!(
            scc?.pluripotencyAnalysis?.data.length ||
            scc?.trilineageDifferentiation?.data.length ||
            scc?.cardiomyocyteDifferentiation?.data.length ||
            scc?.diseaseCardioMyocyteDifferentiation?.data.length
        );

    const hasSCCData = !!(
        stemCellCharacteristics?.rnaSeqAnalysis?.length ||
        hasSCCTables(stemCellCharacteristics)
    );

    const tabComponents = {
        [SubPage.EditingDesign]: editingDesignData ? (
            <EditingDesignSubpage {...editingDesignData} />
        ) : (
            getNoDataComponent(SubPage.EditingDesign)
        ),
        [SubPage.GenomicCharacterization]:
            genomicCharacterizationData?.length ? (
                <GenomicCharacterization
                    diagrams={genomicCharacterizationData || []}
                />
            ) : (
                getNoDataComponent(SubPage.GenomicCharacterization)
            ),
        [SubPage.StemCellCharacteristics]: hasSCCData ? (
            <StemCellChar data={stemCellCharacteristics!} />
        ) : (
            getNoDataComponent(SubPage.StemCellCharacteristics)
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
