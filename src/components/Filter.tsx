import React from "react";
import { Select, Flex } from "antd";
import {
    CategoryLabel,
    UnpackedNormalCellLine,
} from "../component-queries/types";
import { SecondaryButton } from "./shared/Buttons";

const {
    clearButton,
    filterContainer,
} = require("../style/search-and-filter.module.css");

interface FilterProps {
    filteredList: UnpackedNormalCellLine[];
    value: CategoryLabel[];
    onChange: (labels: CategoryLabel[]) => void;
}

const getAllOptions = (
    list: UnpackedNormalCellLine[]
): { label: string; value: string }[] => {
    const set = new Set<string>();
    list.forEach((c) =>
        (c.categoryLabels || []).forEach((label) => set.add(label))
    );
    return Array.from(set)
        .sort((a, b) => a.localeCompare(b))
        .map((c) => ({ label: c, value: c }));
};

const Filter: React.FC<FilterProps> = ({ filteredList, value, onChange }) => {
    const options = React.useMemo(
        () => getAllOptions(filteredList),
        [filteredList]
    );

    const handleClear = () => {
        onChange([]);
    };

    const getValueText = (count: number) => {
        if (count === 0) return null;
        if (count === 1) return <>1 filter applied</>;
        return <>{count} filters applied</>;
    };

    return (
        <Flex className={filterContainer} gap={16} align="baseline">
            <Select
                mode="multiple"
                allowClear
                placeholder="Filter by category"
                options={options}
                value={value}
                onChange={onChange}
                maxTagCount={0}
                maxTagPlaceholder={() => (
                    <span>{getValueText(value.length)}</span>
                )}
            />
            <SecondaryButton
                className={clearButton}
                onClick={handleClear}
                disabled={value.length === 0}
            >
                Clear
            </SecondaryButton>
        </Flex>
    );
};

export default Filter;
