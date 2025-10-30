import React from "react";

import { Clone, RawImageData } from "../../component-queries/types";
import CloneTable from "../../components/CloneTable";
import PreviewCompatibleImage from "../../components/PreviewCompatibleImage";
import InfoPanel from "../../components/shared/InfoPanel";
import { formatCellLineId } from "../../utils";
import useDisableWheel from "../hooks/useDisableWheel";
import ProgressPreview from "./ProgressPreview";
import { Item, TemplateProps } from "./types";

const DiseaseCellLinePreview = ({ entry, getAsset }: TemplateProps) => {
    const parental_line_id = entry.getIn(["data", "parental_line"]);
    useDisableWheel();
    const data = [
        {
            key: "cell_line_id",
            label: "Cell Line ID",
            children: formatCellLineId(entry.getIn(["data", "cell_line_id"] ) as number),
        },
        {
            key: "parental_line",
            label: "Parental Line",
            children: formatCellLineId(parental_line_id as number),
        },
        {
            key: "snp",
            label: "SNP",
            children: entry.getIn(["data", "snp"]),
        },
        {
            key: "order_link",
            label: "Order Link",
            children: (
                <a href={entry.getIn(["data", "order_link"]) as string}>Order Cells</a>
            ),
        },
        {
            key: "certificate_of_analysis",
            label: "Certification Link",
            children: (
                <a href={entry.getIn(["data", "certificate_of_analysis"]) as string}>
                    View Certificate of Analysis
                </a>
            ),
        },

        {
            key: "health_certificate",
            label: "Health Certificate",
            children: entry.getIn(["data", "health_certificate"]),
        },
    ];
    const status = entry.getIn(["data", "status"]);
    const clones = entry.getIn(["data", "clones"]) as Item[];
    const cloneData = [] as Clone[];
    clones.forEach((clone : Item) => {
        const data = {
            clone_number: clone.get("clone_number") as number,
            type: clone.get("type") as string,
            transfection_replicate: clone.get("transfection_replicate") as string,
            genotype: clone.get("genotype") as string,
        };
        cloneData.push(data);
    });

    const imageArray = entry.getIn(["data", "images_and_videos", "images"]) as Item[];
    const images = [] as RawImageData[];
    if (imageArray !== undefined) {
        imageArray.forEach((imageObj: Item) => {
            const image = getAsset(imageObj.get("image")) as RawImageData["image"];
            const data = {
                image: image,
                caption: imageObj.get("caption") as string,
            };
            images.push(data);
        });
    }
    return (
        <>
            <ProgressPreview collection={"disease"} status={status} />
            <InfoPanel data={data} />
            <CloneTable dataSource={cloneData} />

            {images.map((data: RawImageData) => (
                <div
                    key={data.image.url}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "10px",
                    }}
                >
                    <PreviewCompatibleImage
                        imageStyle={{ width: "50%" }}
                        imageInfo={{ image: data.image.url }}
                    />
                    <small>{data.caption}</small>
                </div>
            ))}
        </>
    );
};

export default DiseaseCellLinePreview;
