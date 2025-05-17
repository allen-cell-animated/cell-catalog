import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { filter } from "lodash";
import {
    SearchLookup,
    UnpackedNormalCellLine,
} from "../component-queries/types";
import { GrayButton } from "./shared/Buttons";

const { active } = require("../style/buttons.module.css");
const { searchBarContainer } = require("../style/search-and-filter.module.css");

interface SearchBarProps {
    mappings: SearchLookup;
    allCellLines: UnpackedNormalCellLine[];
    setResults: (filteredCellLines: UnpackedNormalCellLine[]) => void;
}

const SearchBar = ({ mappings, allCellLines, setResults }: SearchBarProps) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [currentValue, setCurrentValue] = useState<string>("");
    const [ignoreSelect, setIgnoreSelect] = useState(false);

    const handleSearch = (value: string) => {
        setCurrentValue(value);
        if (value) {
            const { allSearchableTerms } = mappings;
            const nextOptions: React.SetStateAction<{ value: string }[]> = [];
            allSearchableTerms.forEach((term: string) => {
                if (term.toLowerCase().includes(value.toLowerCase())) {
                    nextOptions.push({ value: term });
                }
            });
            setOptions(nextOptions);
        } else {
            setOptions([]);
            setResults(allCellLines);
        }
    };

    const handleClear = () => {
        setOptions([]);
        setResults(allCellLines);
        setCurrentValue("");
    };

    const onEnter = () => {
        let cellLines: UnpackedNormalCellLine[] = [];
        options.forEach((option) => {
            cellLines = [...cellLines, ...getCellLinesToShow(option.value)];
        });
        setResults(cellLines);
        setIgnoreSelect(true);
        setOptions([]);
    };

    const filterCellLines = (cellIds: number[]) => {
        return allCellLines.filter((cellLine: UnpackedNormalCellLine) => {
            return cellIds.includes(cellLine.cellLineId);
        });
    };

    const getCellLinesToShow = (value: string) => {
        // NOTE: the checks for undefined values are for typescript, this data is all
        // generated from the same source, so the looks ups will always
        // return a value
        const { geneSymToCellIds, structureAndNameToGene } = mappings;
        let dataToShow;
        if (value.includes("AICS")) {
            // the cell line ids in the lookup list are formatted as AICS-<id>
            // but the cell line ids in the data are just numbers
            const cellLineId = value.split("AICS-")[1];
            dataToShow = filter(allCellLines, {
                cellLineId: parseInt(cellLineId),
            });
        } else if (geneSymToCellIds.has(value)) {
            const cellLineIds = geneSymToCellIds.get(value);
            dataToShow = cellLineIds ? filterCellLines(cellLineIds) : [];
        } else if (structureAndNameToGene.has(value)) {
            const geneSymbol = structureAndNameToGene.get(value);
            const cellLineIds = geneSymbol
                ? geneSymToCellIds.get(geneSymbol)
                : undefined;
            dataToShow = cellLineIds ? filterCellLines(cellLineIds) : [];
        } else {
            dataToShow = allCellLines;
        }
        return dataToShow;
    };

    const onSelect = (value: string) => {
        // hitting enter also selects an option from the dropdown
        // but we want to ignore that
        if (ignoreSelect) {
            setIgnoreSelect(false);
            return;
        }
        setCurrentValue(value);
        const dataToShow = getCellLinesToShow(value);
        setResults(dataToShow);
    };

    return (
        <div className={searchBarContainer}>
            <AutoComplete
                options={options}
                value={currentValue}
                style={{ width: "100%" }}
                onSelect={onSelect}
                onSearch={handleSearch}
                allowClear
                onClear={() => {
                    setOptions([]);
                    setResults(allCellLines);
                }}
                onInputKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        onEnter();
                    }
                }}
            >
                <Input placeholder="Search AICS ID, protein, gene..." />
            </AutoComplete>
            <GrayButton
                onClick={handleClear}
                className={currentValue ? active : ""}
            >
                Clear
            </GrayButton>
        </div>
    );
};

export default SearchBar;
