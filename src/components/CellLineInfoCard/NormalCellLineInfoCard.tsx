import React from "react";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { CellLineInfoCardRequiredProps } from "./types";
import GeneSymbolTag from "../GeneSymbolTag";
import TubeIcon from "../Icons/TubeIcon";
import PlasmidIcon from "../Icons/PlasmidIcon";
import { formatCellLineId } from "../../utils";
import { Flex } from "antd";
import { UnpackedGene } from "../../component-queries/types";
import { MultiLineTableCell, ParentComponent } from "../MultiLineTableCell";

type ExtractedGeneFields = Record<keyof UnpackedGene, string[]>;

interface NormalCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    orderPlasmid: string[];
    cloneNumber: number;
    taggedGene: UnpackedGene[];
    fluorescentTag: string[];
    alleleCount: string[];
}

export const NormalCellLineInfoCard: React.FC<NormalCellLineInfoCardProps> = (
    props
) => {

    const extractedGeneFields = props.taggedGene.reduce<ExtractedGeneFields>(
        (acc, gene) => {
            acc.name.push(gene.name);
            acc.symbol.push(gene.symbol);
            if (gene.structure) acc.structure.push(gene.structure);
            if (gene.protein) acc.protein.push(gene.protein);
            return acc;
        },
        { name: [], symbol: [], structure: [], protein: [] }
    );

    const geneSymbolTags = (
        <Flex gap={4}>
            {extractedGeneFields.symbol.map((symbol, i) => (
                <GeneSymbolTag key={i} symbol={symbol as string} />
            ))}
        </Flex>
    );

    const infoRows = [
        {
            key: "1",
            label: "Protein",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.protein}
                />
            ),
        },
        {
            key: "2",
            label: "Gene Symbol",
            children: geneSymbolTags,
        },
        {
            key: "3",
            label: "Gene Name",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.name}
                />
            ),
        },
        {
            key: "4",
            label: "Structure",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.structure}
                />
            ),
        },
    ];

    const buttonList = [
        {
            key: "order",
            label: `Obtain ${formatCellLineId(props.cellLineId)}`,
            disabledLabel: `${formatCellLineId(
                props.cellLineId
            )} not yet available.`,
            icon: <TubeIcon />,
            href: props.orderLink,
        },
        {
            key: "orderPlasmid",
            label: "Obtain Donor Plasmid",
            disabledLabel: `Plasmid not yet available.`,
            icon: <PlasmidIcon />,
            // temp fix: use first plasmid link if multiple exist until design decision made
            href: props.orderPlasmid[0],
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
            multiGene={props.taggedGene.length > 1}
        />
    );
};
