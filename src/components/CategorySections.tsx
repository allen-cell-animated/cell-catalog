import React from "react";
import { CategoryLabel, UnpackedNormalCellLine } from "../component-queries/types";
import CellLineTable from "./CellLineTable";
import { getNormalTableColumns } from "./CellLineTable/NormalTableColumns";
import { getNormalTableMobileConfig } from "./CellLineTable/MobileView";

interface CategorySectionsProps {
    selectedCategories: CategoryLabel[];
    filteredList: UnpackedNormalCellLine[];
    isPhone: boolean;
}

// Todo: get copy from science team/UX
export const LABEL_COPY: Record<CategoryLabel, string> = {
    [CategoryLabel.KeyStructureAndOrganelle]:
        "One sentence on key structures and organelles.",
    [CategoryLabel.NuclearStructure]: "One sentence on nuclear structure.",
    [CategoryLabel.Stress]: "One sentence on stress-related cell lines.",
    [CategoryLabel.CardiacStructure]: "One sentence on cardiac structure.",
    [CategoryLabel.Tools]: "One sentence on tools category.",
    [CategoryLabel.Endothelial]: "One sentence on endothelial category.",
};

const bucketByCategory = (
    list: UnpackedNormalCellLine[],
    selected: string[]
): Record<string, UnpackedNormalCellLine[]> => {
    return list.reduce((acc, item) => {
        for (const label of item.categoryLabels ?? []) {
            if (!selected.includes(label)) continue;
            (acc[label] ??= []).push(item);
        }
        return acc;
    }, {} as Record<string, UnpackedNormalCellLine[]>);
}

const CategorySections: React.FC<CategorySectionsProps> = ({
    selectedCategories,
    filteredList,
    isPhone,
}) => {
    const buckets = React.useMemo(
        () => bucketByCategory(filteredList, selectedCategories),
        [filteredList, selectedCategories]
    );

    return (
        <>
            {selectedCategories.map((cat) => {
                const data = buckets[cat] || [];
                if (!data.length) return null;
                return (
                    <CellLineTable
                        key={cat}
                        tableName={`${cat} — ${LABEL_COPY[cat] || ""}`}
                        cellLines={data}
                        released={true}
                        columns={getNormalTableColumns(false)}
                        mobileConfig={getNormalTableMobileConfig(isPhone)}
                    />
                );
            })}
        </>
    );
};

export default CategorySections;
