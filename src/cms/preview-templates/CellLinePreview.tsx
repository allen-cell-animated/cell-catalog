import React from 'react'
import { CellLineTemplate } from '../../templates/cell-line'
import { TemplateProps } from './types';

const CellLinePreview = ({ entry }: TemplateProps) => {
    const geneEntry = entry.getIn(["data", "gene"]);
    const gene = geneEntry ?.join ? geneEntry.join(", ") : (geneEntry || "");
    const tagLocationEntry = entry.getIn(["data", "tag_location"]);
    const tagLocation = tagLocationEntry ?.join ? tagLocationEntry.join(", ") : (tagLocationEntry || "");
    return (
        <CellLineTemplate
            cellLineId={entry.getIn(["data", "cell_line_id"])}
            cloneNumber={entry.getIn(["data", "clone_number"])}
            gene={gene}
            tagLocation={tagLocation}
            status={entry.getIn(["data", "status"])}
            thumbnail={entry.getIn(["data", "thumbnail_image"])}
        />
    );
};

export default CellLinePreview
