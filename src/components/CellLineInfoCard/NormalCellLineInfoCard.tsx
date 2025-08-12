import React from "react";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { CellLineInfoCardRequiredProps } from "./types";
import GeneSymbolTag from "../GeneSymbolTag";
import TubeIcon from "../Icons/TubeIcon";
import PlasmidIcon from "../Icons/PlasmidIcon";
import { formatCellLineId } from "../../utils";
import { Divider, Flex } from "antd";
import { UnpackedGene } from "../../component-queries/types";

const {
    multiple,
    divider,
} = require("../../style/cell-line-info-card.module.css");

interface ExtractedGeneFields {
    name: string[];
    symbol: string[];
    structure: string[];
    protein: string[];
}

interface NormalCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    orderPlasmid: string;
    cloneNumber: number;
    taggedGene: UnpackedGene[];
    fluorescentTag: string[];
    alleleCount: string[];
}

export const NormalCellLineInfoCard: React.FC<NormalCellLineInfoCardProps> = (
    props
) => {
    const extractFieldsFromTaggedGene = (
        taggedGenes: UnpackedGene[]
    ): ExtractedGeneFields => {
        const result: ExtractedGeneFields = {
            name: [],
            symbol: [],
            structure: [],
            protein: [],
        };

        taggedGenes.forEach((gene) => {
            result.name.push(gene.name);
            result.symbol.push(gene.symbol);
            if (gene.structure) result.structure.push(gene.structure);
            if (gene.protein) result.protein.push(gene.protein);
        });

        return result;
    };

    const extractedGeneFields = extractFieldsFromTaggedGene(props.taggedGene);

    const renderWithDividers = (items: (string | undefined)[]) => {
        return (
            <div className={multiple}>
                {items.map((item, i) => (
                    <>
                        <span>{item}</span>
                        {i < items.length - 1 && (
                            <Divider className={divider} />
                        )}
                    </>
                ))}
            </div>
        );
    };

    const proteinList = renderWithDividers(extractedGeneFields.protein);
    const geneNameList = renderWithDividers(extractedGeneFields.name);
    const structureList = renderWithDividers(extractedGeneFields.structure);

    const geneSymbolTags = (
        <Flex gap={4}>
            {extractedGeneFields.symbol.map((symbol, i) => (
                <GeneSymbolTag key={i} symbol={symbol as string} />
            ))}
        </Flex>
    );

    // matching the data with catalog 1.0, the final version may change depending on the design
    // for now, showing only the first gene data if a line has multiple genes
    const infoRows = [
        {
            key: "1",
            label: "Protein",
            children: proteinList,
        },
        {
            key: "2",
            label: "Gene Symbol",
            children: geneSymbolTags,
        },
        {
            key: "3",
            label: "Gene Name",
            children: geneNameList,
        },
        {
            key: "4",
            label: "Structure",
            children: structureList,
        },
    ];

    const buttonList = [
        {
            key: "order",
            label: `Obtain ${formatCellLineId(props.cellLineId)}`,
            icon: <TubeIcon />,
            href: props.orderLink,
        },
        {
            key: "orderPlasmid",
            label: "Obtain Donor Plasmid",
            icon: <PlasmidIcon />,
            href: props.orderPlasmid,
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
            multiGene={props.taggedGene.length > 1}
            alignContent={true}
        />
    );
};
