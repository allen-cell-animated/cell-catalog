import { ColumnsType } from "antd/es/table";
import React from "react";

import {
    CardiomyocyteDifferentiation,
    DiseaseCardioMyocyteDifferentiation,
    PluripotencyAnalysis,
    TrilineageDifferentiation,
} from "./types";

const {
    cloneColumn,
    percentPositiveColumn,
} = require("../../style/stem-cell-char.module.css");

export const PERCENT_POS_COLUMNS: ColumnsType<DiseaseCardioMyocyteDifferentiation> =
    [
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

export const PERCENT_POS_CAPTION =
    "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene.";

export const PLURIPOTENCY_COLUMNS: ColumnsType<PluripotencyAnalysis> = [
    {
        title: "Marker",
        dataIndex: "marker",
        key: "marker",
    },
    {
        title: "% positive cells",
        dataIndex: "positiveCells",
        key: "positiveCells",
    },
];

export const TRILINEAGE_COLUMNS: ColumnsType<TrilineageDifferentiation> = [
    {
        title: "Germ Layer",
        dataIndex: "germLayer",
        key: "germLayer",
    },
    {
        title: "Marker",
        dataIndex: "marker",
        key: "marker",
    },
    {
        title: "% positive cells",
        dataIndex: "percentPositiveCells",
        key: "percentPositiveCells",
    },
];

export const CARDIOMYOCYTE_COLUMNS: ColumnsType<CardiomyocyteDifferentiation> =
    [
        {
            title: "Troponin T, % positive cells (n)",
            dataIndex: "troponinPercentPositive",
            key: "troponinPercentPositive",
        },
        {
            title: "% of experiments w/ beating cells (n)",
            dataIndex: "dayOfBeatingPercent",
            key: "dayOfBeatingPercent",
        },
        {
            title: "Day of beating initiation",
            dataIndex: "dayOfBeatingRange",
            key: "dayOfBeatingRange",
        },
    ];
