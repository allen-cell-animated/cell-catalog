import React, { useRef, useState } from "react";
import { AutoComplete, Input } from "antd";
import {
    SearchLookup,
    UnpackedNormalCellLine,
} from "../component-queries/types";
import { SecondaryButton } from "./shared/Buttons";

const { searchBarContainer } = require("../style/search-and-filter.module.css");

interface SearchBarProps {
    mappings: SearchLookup;
    allCellLines: UnpackedNormalCellLine[];
    setResults: (filteredCellLines: UnpackedNormalCellLine[]) => void;
}

const SearchBar = ({ mappings, allCellLines, setResults }: SearchBarProps) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [currentValue, setCurrentValue] = useState<string>("");
    const ignoreSelect = useRef(false);

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
        // if the user presses enter we want to select all the options
        // not select the first item in the dropdown
        ignoreSelect.current = true;
        let selectedCellLines = new Set<number>();
        options.forEach((option) => {
            selectedCellLines = new Set([
                ...selectedCellLines,
                ...getCellLineIdsToShow(option.value),
            ]);
        });
        if (selectedCellLines.size === 0) {
            setResults([]);
            return;
        }
        const cellLines = filterCellLines(Array.from(selectedCellLines));
        setResults(cellLines);
    };

    const filterCellLines = (cellIds: number[]) => {
        return allCellLines.filter((cellLine: UnpackedNormalCellLine) => {
            return cellIds.includes(cellLine.cellLineId);
        });
    };

    const getCellLineIdsToShow = (value: string): number[] => {
        // NOTE: the checks for undefined values are for typescript, this data is all
        // generated from the same source, so the looks ups will always
        // return a value
        const { geneSymToCellIds, structureAndNameToGene } = mappings;
        let cellLineIds: number[] = [];
        if (value.includes("AICS")) {
            // the cell line ids in the lookup list are formatted as AICS-<id>
            // but the cell line ids in the data are just numbers
            const cellLineId = parseInt(value.split("AICS-")[1]);
            cellLineIds = [cellLineId];
        } else if (geneSymToCellIds.has(value)) {
            cellLineIds = geneSymToCellIds.get(value) || [];
        } else if (structureAndNameToGene.has(value)) {
            const geneSymbol = structureAndNameToGene.get(value);
            cellLineIds = geneSymbol
                ? geneSymToCellIds.get(geneSymbol) || []
                : [];
        }
        return cellLineIds;
    };

    const getCellLinesToShow = (value: string) => {
        let dataToShow: UnpackedNormalCellLine[] = [];
        const cellLineIds = getCellLineIdsToShow(value);
        if (cellLineIds.length > 0) {
            dataToShow = filterCellLines(cellLineIds);
        }
        return dataToShow;
    };

    const onSelect = (value: string) => {
        if (ignoreSelect.current) {
            // the user pressed enter, which can also trigger the select event
            ignoreSelect.current = false;
            return;
        }
        setCurrentValue(value);
        const dataToShow = getCellLinesToShow(value);
        setResults(dataToShow);
    };

    return (
        <div className={searchBarContainer}>
            <AutoComplete
                defaultActiveFirstOption={false}
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
            <SecondaryButton
                onClick={handleClear}
                disabled={currentValue === ""}
            >
                Clear
            </SecondaryButton>
        </div>
    );
};

export default SearchBar;
