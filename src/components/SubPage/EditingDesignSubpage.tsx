import React from "react";
import { Card } from "antd";
import { Diagram } from "../../types";
import DiagramCard from "../shared/DiagramCard";

const {
    container,
    card,
    dataTable,
    dataRow,
    dataLabel,
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
    const rows = [
        {
            label: "cRNA Target Site:",
            value: formatTextWithGeneLocations(
                editingDesignData.crna_target_site,
                pamSite
            ),
        },
        {
            label: "DNA Donor Sequence:",
            value: formatTextWithGeneLocations(
                editingDesignData.dna_donor_sequence,
                mutation
            ),
        },
        {
            label: "Cas9:",
            value: editingDesignData.cas9,
        },
        {
            label: "F Primer for PCR/Sequencing:",
            value: editingDesignData.f_primer,
        },
        {
            label: "R Primer for PCR/Sequencing:",
            value: editingDesignData.r_primer,
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
                <div className={dataTable}>
                    {rows.map((row, idx) => (
                        <div className={dataRow} key={idx}>
                            <span className={dataLabel}>{row.label}&nbsp;</span>
                            <span>{row.value}</span>
                        </div>
                    ))}
                </div>
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
