import React from "react";

import { Isoform } from "../../component-queries/types";
import { GeneNameTemplate } from "../../templates/gene-name";
import { Item, TemplateProps } from "./types";

const GeneNamePreview = ({ entry }: TemplateProps) => {
    const isoforms = [] as Isoform[];
    const isoformData = entry.getIn(["data", "isoforms"]) as Item[];
    if (isoformData) {
        isoformData.forEach((isoform: Item) => {
            const idsData = isoform.get("ids") as unknown as Item;
            const ids = [] as string[];
            if (idsData?.size) {
                idsData.forEach((id: Item) => {
                    ids.push(id.toString());
                });
            }
            isoforms.push({
                name: isoform.get("name") as string,
                ids: ids,
            });
        });
    }
    return (
        <GeneNameTemplate
            symbol={entry.getIn(["data", "symbol"]) as string}
            name={entry.getIn(["data", "name"]) as string}
            protein={entry.getIn(["data", "protein"]) as string}
            structure={entry.getIn(["data", "structure"]) as string}
            isoforms={isoforms}
        />
    );
};

export default GeneNamePreview;
