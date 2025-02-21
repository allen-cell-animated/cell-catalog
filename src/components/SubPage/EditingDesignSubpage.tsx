import React from "react";
import SubpageContent from "./Subpage";
import { Diagram } from "../../types";

const {
    pamSite,
    mutation,
} = require("../../style/editing-design.module.css");

interface EditingDesignContentProps {
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

const EditingDesignContent: React.FC<EditingDesignContentProps> = ({
    editingDesignData,
}) => {
    const contentData = React.useMemo(
        () => ({
            rows: [
                {
                    label: "cRNA Target Site:",
                    value: formatTextWithGeneLocations(
                        editingDesignData.crna_target_site,
                        pamSite
                    ),
                },
                {
                    label: "DNA Donor Sequence:",
                    value: formatTextWithGeneLocations(editingDesignData.dna_donor_sequence, mutation),
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
            ],
            legendContent: (
                <>
                    <span className={pamSite}>Red</span> = PAM Site,{" "}
                    <span className={mutation}>Blue</span> = Mutation
                </>
            ),
            diagrams: editingDesignData.diagrams.map((diagram) => ({
                image: diagram.image,
                title: diagram.title,
                caption: diagram.caption,
            })),
        }),
        [editingDesignData]
    );

    return <SubpageContent data={contentData} headerLeadText="HDR Editing Design" />;
};

export default EditingDesignContent;