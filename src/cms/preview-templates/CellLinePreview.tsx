import React from "react";
import { CellLineTemplate } from "../../templates/cell-line";
import { TemplateProps } from "./types";
import useDisableWheel from "../hooks/useDisableWheel";

const CellLinePreview = ({ entry }: TemplateProps) => {
    const geneticModificationsEntry = entry.getIn(["data", "genetic_modifications"]);
    const geneticModifications = geneticModificationsEntry ?
        geneticModificationsEntry.toJS() : 
        [];
    useDisableWheel();
    return (
        <CellLineTemplate
            cellLineId={entry.getIn(["data", "cell_line_id"])}
            cloneNumber={entry.getIn(["data", "clone_number"])}
            geneticModifications={geneticModifications}
            status={entry.getIn(["data", "status"])}
            thumbnail={entry.getIn(["data", "thumbnail_image"])}
        />
    );
};

export default CellLinePreview;
