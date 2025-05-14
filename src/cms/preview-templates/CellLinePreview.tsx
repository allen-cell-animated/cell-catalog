import React from "react";
import { TemplateProps } from "./types";
import useDisableWheel from "../hooks/useDisableWheel";
import InfoPanel from "../../components/shared/InfoPanel";
import ProgressPreview from "./ProgressPreview";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const CellLinePreview = ({ entry }: TemplateProps) => {
    useDisableWheel();
    const geneticModificationsEntry = entry.getIn(["data", "genetic_modifications"]);
    const geneticModifications = geneticModificationsEntry ?
        geneticModificationsEntry.toJS() : 
        [];

    // TODO: debug gastby-image
    const thumbnail = entry.getIn(["data", "thumbnail_image"]);
    const thumbnailImage = getImage(thumbnail);

    const status = entry.getIn(["data", "status"]);
    const genes = geneticModifications.map((mod: any) => mod.gene).join(" / ");
    const tagLocations = geneticModifications.map((mod: any) => mod.tag_location).join(" / ");
    const fluorescentTags = geneticModifications.map((mod: any) => mod.fluorescent_tag).join(" / ");
    const alleleCounts = geneticModifications.map((mod: any) => mod.allele_count).join(" / ");

    // TODO: should add protein, structure and name? what's the best way?
    const data = [
        {
            key: "cell_line_id",
            label: "Cell Line ID",
            children: entry.getIn(["data", "cell_line_id"]),
        },
        {
            key: "clone_number",
            label: "Clone Number",
            children: entry.getIn(["data", "clone_number"]),
        },
        {
            key: "gene",
            label: "Gene",
            children: genes,
        },
        {
            key: "tag_location",
            label: "Tag Location",
            children: tagLocations,
        },
        {
            key: "fluorescent_tag",
            label: "Fluorescent Tag",
            children: fluorescentTags,
        },
        {
            key: "allele_count",
            label: "Allele Count",
            children: alleleCounts,
        },
    ];

    // TODO: does this current info panel component fit in here?
    return (
        <>
            <ProgressPreview status={status} />
            <InfoPanel data={data} />
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
