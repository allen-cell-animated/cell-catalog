import React from "react";
const {
    cloneColumn,
    percentPositiveColumn,
} = require("../../style/stem-cell-char.module.css");
export const percentPositiveTableColumns = [
    {
        title: (
            <>
                Clone <br /> Number
            </>
        ),
        dataIndex: "cloneNumber",
        key: "cloneNumber",
        width: 271,
        className: cloneColumn,
    },
    {
        title: "Troponin T, % positive cells (n)",
        dataIndex: "value",
        key: "value",
        width: 140,
        className: percentPositiveColumn,
    },
];

export const percentPositiveCaption =
    "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene.";
