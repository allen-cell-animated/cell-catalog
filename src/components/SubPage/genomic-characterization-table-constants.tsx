import { ColumnsType } from "antd/es/table";
import { AmplifiedJunction, CrRnaOffTargets, DDCPR } from "./types";

export const AMPLIFIED_JUNCTION_COLUMNS: ColumnsType<AmplifiedJunction> = [
    {
        title: "Edited Gene",
        dataIndex: "editedGene",
        key: "editedGene",
    },
    {
        title: "Junction",
        dataIndex: "junction",
        key: "junction",
    },
    {
        title: "Expected Size",
        dataIndex: "expectedSize",
        key: "expectedSize",
    },
    {
        title: "Confirmed Sequence",
        dataIndex: "confirmedSequence",
        key: "confirmedSequence",
    },
];

export const DDPCR_COLUMNS: ColumnsType<DDCPR> = [
    {
        title: "Tag",
        dataIndex: "tag",
        key: "tag",
    },
    {
        title: "Clone",
        dataIndex: "clone",
        key: "clone",
    },
    {
        title: "FP:RPP30",
        dataIndex: "fpRatio",
        key: "fpRatio",
    },
    {
        title: "Plasmid",
        dataIndex: "plasmid",
        key: "plasmid",
    },
];

export const CRRNA_OFF_TARGETS_COLUMNS: ColumnsType<CrRnaOffTargets> = [
    {
        title: "Clones Analyzed",
        dataIndex: "clonesAnalyzed",
        key: "clonesAnalyzed",
    },
    {
        title: "Off-targets sequenced per clone",
        dataIndex: "offTargetsSequenced",
        key: "offTargetsSequenced",
    },
    {
        title: "Total sites sequenced",
        dataIndex: "totalSitesSequenced",
        key: "totalSitesSequenced",
    },
    {
        title: "Mutations Identified",
        dataIndex: "mutationsIdentified",
        key: "mutationsIdentified",
    },
];
