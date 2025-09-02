import React from "react";
import { DescriptionsProps } from "antd";
import DiagramCard from "../shared/DiagramCard";
import InfoPanel from "../shared/InfoPanel";
import { UnpackedEditingDesign as EditingDesignSubpageProps } from "./types";
import SubpageContentCard from "../shared/SubpageContentCard";

const { container, legendText } = require("../../style/subpage.module.css");

const {
    pamSite,
    mutation,
    noHeader,
} = require("../../style/editing-design.module.css");

const formatTextWithGeneLocations = (text: string, className: string) => {
    // PAM sites and mutations are indicated in the string using square brackets
    const parts = text.split(/(\[.*?\])/);
    return parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
            const bracketsRemoved = part.slice(1, -1);
            return (
                <span key={index} className={className}>
                    {bracketsRemoved}
                </span>
            );
        }
        return part;
    });
};

const EditingDesignSubpage: React.FC<EditingDesignSubpageProps> = ({
    crRnaTargetSite,
    dnaDonorSequence,
    cas9,
    fPrimer,
    rPrimer,
    diagrams,
    ncbiIsoforms,
    crRNA,
    linker,
}) => {
    const rows: DescriptionsProps["items"] = [];

    if (ncbiIsoforms) {
        rows.push({
            key: "isoforms",
            label: "NCBI Isoforms:",
            children: ncbiIsoforms,
        });
    }

    if (crRNA) {
        rows.push({
            key: "cr_rna",
            label: "crRNA Target Site:",
            children: crRNA,
        });
    }

    if (linker) {
        rows.push({
            key: "linker",
            label: "Linker: ",
            children: linker,
        });
    }

    if (crRnaTargetSite) {
        rows.push({
            key: "cr_rna",
            label: "crRNA Target Site:",
            children: formatTextWithGeneLocations(crRnaTargetSite, pamSite),
        });
    }

    if (dnaDonorSequence) {
        rows.push({
            key: "dna",
            label: "DNA Donor Sequence:",
            children: (
                <div>
                    {dnaDonorSequence.map((sequence, index) => {
                        return (
                            <div key={index}>
                                <span> {sequence.type}{sequence.type === "Mutant" ? "*" : ""} </span>
                                {formatTextWithGeneLocations(
                                    sequence.sequence,
                                    mutation
                                )}
                            </div>
                        );
                    })}
                </div>
            ),
        });
    }

    if (cas9) {
        rows.push({
            key: "cas9",
            label: "Cas9:",
            children: cas9,
        });
    }

    if (fPrimer) {
        rows.push({
            key: "f_primer",
            label: "F Primer for PCR/Sequencing:",
            children: fPrimer,
        });
    }

    if (rPrimer) {
        rows.push({
            key: "r_primer",
            label: "R Primer for PCR/Sequencing:",
            children: rPrimer,
        });
    }

    const shouldShowLegend = Boolean(crRnaTargetSite || dnaDonorSequence);
    const legendContent = shouldShowLegend ? (
        <div className={legendText}>
            {crRnaTargetSite && (
                <>
                    <span className={pamSite}>Red</span> = PAM Site
                </>
            )}
            {crRnaTargetSite && dnaDonorSequence && ", "}
            {dnaDonorSequence && (
                <>
                    <span className={mutation}>Blue</span> = Mutation
                </>
            )}
        </div>
    ) : null;

    return (
        <div className={container}>
            {rows.length > 0 && (
                <SubpageContentCard>
                    <InfoPanel data={rows} hasLegend={shouldShowLegend} />
                    {legendContent}
                </SubpageContentCard>
            )}
            {diagrams?.map((diagramProps, index) => (
                <DiagramCard
                    key={index}
                    title={diagramProps.title}
                    caption={diagramProps.caption}
                    image={diagramProps.image}
                    className={!diagramProps.title && noHeader}
                />
            ))}
        </div>
    );
};

export default EditingDesignSubpage;
