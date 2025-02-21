import React from "react";
import { Card, DescriptionsProps } from "antd";
import { Diagram } from "../../types";
import DiagramCard from "../shared/DiagramCard";
import InfoPanel from "../shared/InfoPanel";

const {
    container,
    card,
    legendText,
} = require("../../style/disease-subpage.module.css");

const { pamSite, mutation } = require("../../style/editing-design.module.css");

interface EditingDesignSubpageProps {
    editingDesignData: {
        crna_target_site: string;
        dna_donor_sequence: string;
        cas9: string;
        f_primer: string;
        r_primer: string;
        diagrams: Diagram[];
    };
}

const formatTextWithGeneLocations = (text: string, className: string) => {
    // PAM sites and mutations are indicated in the string using square brackets
    const parts = text.split(/(\[.*?\])/);
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
    editingDesignData,
}) => {
    const rows: DescriptionsProps["items"] = [
        {
            key: "crna",
            label: "cRNA Target Site:",
            children: formatTextWithGeneLocations(
                editingDesignData.crna_target_site,
                pamSite
            ),
        },
        {
            key: "dna",
            label: "DNA Donor Sequence:",
            children: formatTextWithGeneLocations(
                editingDesignData.dna_donor_sequence,
                mutation
            ),
        },
        {
            key: "cas9",
            label: "Cas9:",
            children: editingDesignData.cas9,
        },
        {
            key: "f_primer",
            label: "F Primer for PCR/Sequencing:",
            children: editingDesignData.f_primer,
        },
        {
            key: "r_primer",
            label: "R Primer for PCR/Sequencing:",
            children: editingDesignData.r_primer,
        },
    ];

    const legendContent = (
        <>
            <span className={"pamSite"}>Red</span> = PAM Site,{" "}
            <span className={"mutation"}>Blue</span> = Mutation
        </>
    );

    return (
        <div className={container}>
            <Card className={card} bordered={true}>
                <InfoPanel data={rows} />
                {legendContent && (
                    <div className={legendText}>{legendContent}</div>
                )}
            </Card>

            {editingDesignData.diagrams?.map((diagram, index) => (
                <DiagramCard
                    key={index}
                    diagram={diagram}
                    headerLeadText="HDR Editing Design"
                />
            ))}
        </div>
    );
};

export default EditingDesignSubpage;
