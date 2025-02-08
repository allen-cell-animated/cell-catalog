import React from "react";
import SubpageContent from "./Subpage";
import { Diagram } from "../types";

const {
    pamSite,
    mutation,
} = require("../style/editing-design.module.css");

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

const EditingDesignContent: React.FC<EditingDesignContentProps> = ({
    editingDesignData,
}) => {
    const contentData = React.useMemo(
        () => ({
            rows: [
                {
                    label: "cRNA Target Site:",
                    value: editingDesignData.crna_target_site,
                    formatClass: pamSite,
                },
                {
                    label: "DNA Donor Sequence:",
                    value: editingDesignData.dna_donor_sequence,
                    formatClass: mutation,
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