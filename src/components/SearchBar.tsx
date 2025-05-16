import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { UnpackedNormalCellLine } from "../component-queries/types";
import { filter } from "lodash";
import { GrayButton } from "./shared/Buttons";
import { on } from "events";

interface SearchBarProps {
    mappings: any;
    dataToSearch: any;
    onSearch: (filteredCellLines: UnpackedNormalCellLine[]) => void;
}

const SearchBar = ({ mappings, dataToSearch, onSearch }: SearchBarProps) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [currentValue, setCurrentValue] = useState<string>("");
    const handleSearch = (value: string) => {
        console.log("Search value:", value);
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
            onSearch(dataToSearch);
        }
    };

    const handleClear = () => {
        setOptions([]);
        onSearch(dataToSearch);
        setCurrentValue("");
    };

    const onEnter = () => {
        let cellLines: UnpackedNormalCellLine[] = [];
        console.log("Selected options:", options);
        options.forEach((option) => {
            cellLines = [...cellLines, ...getCellLinesToShow(option.value)];
        });
        console.log("Filtered cell lines:", cellLines);
        onSearch(cellLines);
        // setOptions([]);
    };

    const filterCellLines = (cellIds: number[]) => {
        return dataToSearch.filter((cellLine: UnpackedNormalCellLine) => {
            return cellIds.includes(cellLine.cellLineId);
        });
    };

    const getCellLinesToShow = (value: string) => {
        const { cellLineIdMap, geneMap } = mappings;
        let dataToShow;
        if (value.includes("AICS")) {
            const cellLineId = value.split("AICS-")[1];
            dataToShow = filter(dataToSearch, {
                cellLineId: parseInt(cellLineId),
            });
        } else if (cellLineIdMap.has(value)) {
            const cellLineIds = cellLineIdMap.get(value);
            dataToShow = filterCellLines(cellLineIds);
        } else if (geneMap.has(value)) {
            const geneSymbol = geneMap.get(value);
            const cellLineIds = cellLineIdMap.get(geneSymbol);
            dataToShow = filterCellLines(cellLineIds);
        } else {
            dataToShow = dataToSearch;
        }
        return dataToShow;
    };

    const onSelect = (value: string) => {
        console.log("Selected value:", value);
        setCurrentValue(value);
        const dataToShow = getCellLinesToShow(value);
        onSearch(dataToShow);
    };

    return (
        <>
            <AutoComplete
                options={options}
                value={currentValue}
                style={{ width: 300 }}
                onSelect={onSelect}
                onSearch={handleSearch}
                allowClear
                onClear={() => {
                    setOptions([]);
                    onSearch(dataToSearch);
                }}
                onInputKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        console.log("Enter key pressed");
                        onEnter();
                    }
                }}
            >
                <Input placeholder="Search here" />
            </AutoComplete>
            <GrayButton onClick={handleClear}>Clear</GrayButton>
        </>
    );
};

export default SearchBar;
