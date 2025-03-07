import React from "react";
import { DescriptionsProps } from "antd";
import DiagramCard from "../shared/DiagramCard";
import InfoPanel from "../shared/InfoPanel";
import { UnpackedEditingDesignData as EditingDesignSubpageProps } from "../../component-queries/types";
import SubpageContentCard from "../shared/SubpageContentCard";

const { container, legendText } = require("../../style/subpage.module.css");

const { pamSite, mutation } = require("../../style/editing-design.module.css");

const formatTextWithGeneLocations = (text: string | {sequence: string} , className: string) => {
    // PAM sites and mutations are indicated in the string using square brackets
    const input = typeof text === "string" ? text : text.sequence;
    const parts = input.split(/(\[.*?\])/);
    return parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
            return (
                <span key={index} className={className}>
                    {part}
                </span>
            );
        }
        return part;
    });
};

const EditingDesignSubpage: React.FC<EditingDesignSubpageProps> = ({
    crnaTargetSite,
    dnaDonorSequence,
    cas9,
    fPrimer,
    rPrimer,
    diagrams,
}) => {
    const rows: DescriptionsProps["items"] = [];

    if (crnaTargetSite) {
        rows.push({
            key: "crna",
            label: "cRNA Target Site:",
            children: formatTextWithGeneLocations(crnaTargetSite, pamSite),
        });
    }

    if (dnaDonorSequence) {
        const sequences = Array.isArray(dnaDonorSequence)
            ? dnaDonorSequence
            : [dnaDonorSequence];
        rows.push({
            key: "dna",
            label: "DNA Donor Sequence(s):",
            children: sequences.map((sequence, index) => (
                <div key={index}>
                    {formatTextWithGeneLocations(sequence, mutation)}
                </div>
                
            )
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

    const shouldShowLegend = Boolean(crnaTargetSite || dnaDonorSequence);
    const legendContent = shouldShowLegend ? (
        <div className={legendText}>
            {crnaTargetSite && (
                <>
                    <span className={pamSite}>Red</span> = PAM Site
                </>
            )}
            {crnaTargetSite && dnaDonorSequence && ", "}
            {dnaDonorSequence && (
                <>
                    <span className={mutation}>Blue</span> = Mutation
                </>
            )}
        </div>
    ) : null;

    if (rows.length === 0 && !diagrams?.length) {
        return null;
    }

    return (
        <div className={container}>
            {rows.length > 0 && (
                <SubpageContentCard>
                    <InfoPanel data={rows} />
                    {legendContent}
                </SubpageContentCard>
            )}

            {diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    title={diagram.title}
                    caption={diagram.caption}
                    image={diagram.image.childImageSharp.gatsbyImageData}
                    headerLeadText="HDR Editing Design"
                />
            ))}
        </div>
    );
};

export default EditingDesignSubpage;
