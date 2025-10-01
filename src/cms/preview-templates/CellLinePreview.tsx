import React from "react";

import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import InfoPanel from "../../components/shared/InfoPanel";
import useDisableWheel from "../hooks/useDisableWheel";
import ProgressPreview from "./ProgressPreview";
import { TemplateProps } from "./types";

const CellLinePreview = ({ entry, getAsset }: TemplateProps) => {
    useDisableWheel();
    const geneticModificationsEntry = entry.getIn([
        "data",
        "genetic_modifications",
    ]);
    const geneticModifications = geneticModificationsEntry
        ? geneticModificationsEntry.toJS()
        : [];
    const imagesEntry = entry.getIn(["data", "images_and_videos", "images"]);
    const images = imagesEntry ? imagesEntry.toJS() : [];

    const thumbnailImage =
        images.length > 0 ? getAsset(images[0]?.image) : null;

    const status = entry.getIn(["data", "status"]);
    const genes = geneticModifications.map((mod: any) => mod.gene).join(" / ");
    const tagLocations = geneticModifications
        .map((mod: any) => mod.tag_location)
        .join(" / ");
    const fluorescentTags = geneticModifications
        .map((mod: any) => mod.fluorescent_tag)
        .join(" / ");
    const alleleCounts = geneticModifications
        .map((mod: any) => mod.allele_count)
        .join(" / ");

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
        ...(thumbnailImage
            ? [
                  {
                      key: "thumbnail",
                      label: "Thumbnail Image",
                      children: (
                          <PreviewCompatibleImage
                              imageInfo={{
                                  image: thumbnailImage.url,
                                  alt: "Cell Line Thumbnail",
                              }}
                              imageStyle={{
                                  maxWidth: "400px",
                              }}
                          />
                      ),
                  },
              ]
            : []),
    ];

    return (
        <>
            <ProgressPreview collection={"cell_lines"} status={status} />
            <InfoPanel data={data} />
        </>
    );
};

export default CellLinePreview;
