import React from "react";
import { Flex } from "antd";
import Icon from "@ant-design/icons";

import { WHITE } from "../../style/theme";
import { mdBreakpoint } from "./types";

const CertificateIcon = require("../../img/cert-icon.svg");
const Tube = require("../../img/tube.svg");

const {
    actionColumn,
    actionButton,
    tubeIcon,
} = require("../../style/table.module.css");

export const certificateOfAnalysisColumn = {
    title: "",
    key: "certificateOfAnalysis",
    dataIndex: "certificateOfAnalysis",
    className: actionColumn,
    fixed: "right" as const,
    responsive: mdBreakpoint,
    render: (certificateOfAnalysis: string) => {
        return (
            certificateOfAnalysis && (
                <a
                    key={certificateOfAnalysis}
                    className={actionButton}
                    href={certificateOfAnalysis}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex>
                        <Icon
                            component={CertificateIcon}
                            style={{
                                color: WHITE,
                                fontSize: "40px",
                            }}
                        />
                        Cert. of Analysis
                    </Flex>
                </a>
            )
        );
    },
};

export const obtainLineColumn = {
    title: "",
    key: "orderLink",
    dataIndex: "orderLink",
    className: actionColumn,
    fixed: "right" as const,
    render: (orderLink: string) => {
        return (
            orderLink && (
                <a
                    key={orderLink}
                    className={actionButton}
                    href={orderLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Flex>
                        <Icon
                            className={tubeIcon}
                            component={Tube}
                            style={{
                                color: WHITE,
                                fontSize: "40px",
                            }}
                        />
                        Obtain Collection
                    </Flex>
                </a>
            )
        );
    },
};
