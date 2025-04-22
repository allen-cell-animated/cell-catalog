import React from "react";
import { TemplateProps } from "./types";
import useDisableWheel from "../hooks/useDisableWheel";
import InfoPanel from "../../components/shared/InfoPanel";
import ProgressPreview from "./ProgressPreview";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CellLinePreview = ({ entry }: TemplateProps) => {
    useDisableWheel();
    const geneEntry = entry.getIn(["data", "gene"]);
    const gene = geneEntry?.join ? geneEntry.join(", ") : geneEntry || "";
    // tempoarily getting allele count as a string before type fixes
    const taggedAlleles = entry.getIn(["data", "allele_count"]);
    // const taggedAllelesEntry = entry.getIn(["data", "allele_count"]);
    // const taggedAlleles = taggedAllelesEntry?.join ? taggedAllelesEntry.join(", ") : taggedAllelesEntry || "";
    const tagLocationEntry = entry.getIn(["data", "tag_location"]);
    const tagLocation = tagLocationEntry?.join
        ? tagLocationEntry.join(", ")
        : tagLocationEntry || "";
    const fluorescentTagEntry = entry.getIn(["data", "fluorescent_tag"]);
    const fluorescentTag = fluorescentTagEntry?.join
        ? fluorescentTagEntry.join(", ")
        : fluorescentTagEntry || "";

    const status = entry.getIn(["data", "status"]);
    const thumbnail = entry.getIn(["data", "thumbnail_image"])
    const thumbnailImage = getImage(thumbnail);
    const data = [
        {
            key: "cell_line_id",
            label: "Cell Collection ID",
            children: entry.getIn(["data", "cell_line_id"]),
        },
        {
            key: "protein",
            label: "Protein",
            children: entry.getIn(["data", "protein"]),
        },
        {
            key: "gene_symbol",
            label: "Gene Symbol",
            children: gene,
        },
        {
            key: "clone_number",
            label: "Clone Number",
            children: entry.getIn(["data", "clone_number"]),
        },
        {
            key: "tagged_alleles",
            label: "Tagged Alleles",
            children: taggedAlleles,
        },
        {
            key: "structure",
            label: "Structure",
            children: entry.getIn(["data", "structure"]),
        },
        {
            key: "fluorescent_tag",
            label: "Fluorescent Tag",
            children: fluorescentTag,
        },
        {
            key: "tag_location",
            label: "Tag Location",
            children: tagLocation,
        },
    ]
    return (
        <>
            <ProgressPreview status={status} />
            <InfoPanel data={data} />
            {/* troubleshoot thumbnailImage */}
            {thumbnailImage && (
                <GatsbyImage
                    image={thumbnailImage}
                    alt="Cell Line Thumbnail"
                />
            )}
        </>
    );
};

export default CellLinePreview;
