import React from "react";

import { CellLineStatus, GeneticModification, ImageAsset, UserEnteredImage } from "../../component-queries/types";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import InfoPanel from "../../components/shared/InfoPanel";
import useDisableWheel from "../hooks/useDisableWheel";
import ProgressPreview from "./ProgressPreview";
import { Item, TemplateProps } from "./types";

const CellLinePreview = ({ entry, getAsset }: TemplateProps) => {
    useDisableWheel();
    const geneticModificationsEntry = entry.getIn([
        "data",
        "genetic_modifications",
    ]) as Item;
    const geneticModifications: GeneticModification[] =
        geneticModificationsEntry
            ? (geneticModificationsEntry.toJS() as GeneticModification[])
            : [];
    const imagesEntry = entry.getIn([
        "data",
        "images_and_videos",
        "images",
    ]) as Item;
    const images: UserEnteredImage[] = imagesEntry ? imagesEntry.toJS() as UserEnteredImage[] : [];
    const thumbnailImage: ImageAsset | null =
        images.length > 0 ? getAsset(images[0]?.image as string) as ImageAsset : null;
    const status = entry.getIn(["data", "status"]) as CellLineStatus;
    const genes = geneticModifications
        .map((mod: GeneticModification) => mod.gene)
        .join(" / ");
    const tagLocations = geneticModifications
        .map((mod: GeneticModification) => mod.tag_location)
        .join(" / ");
    const fluorescentTags = geneticModifications
        .map((mod: GeneticModification) => mod.fluorescent_tag)
        .join(" / ");
    const alleleCounts = geneticModifications
        .map((mod: GeneticModification) => mod.allele_count)
        .join(" / ");

    const data = [
        {
            key: "cell_line_id",
            label: "Cell Line ID",
            children: entry.getIn(["data", "cell_line_id"]) as number,
        },
        {
            key: "clone_number",
            label: "Clone Number",
            children: entry.getIn(["data", "clone_number"]) as number,
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
    console.log("data", data);

    return (
        <>
            <ProgressPreview collection={"cell_lines"} status={status} />
            <InfoPanel data={data} />
        </>
    );
};

export default CellLinePreview;
