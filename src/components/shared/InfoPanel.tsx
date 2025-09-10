import { Descriptions } from "antd";
import React from "react";
import type { DescriptionsProps } from "antd";
import classNames from "classnames";

interface InfoPanelProps {
    data: DescriptionsProps["items"];
    hasLegend?: boolean;
    baseline?: boolean;
    alignContent?: boolean;
}

const { container, legend, aligned } = require("../../style/info-panel.module.css");

const InfoPanel: React.FC<InfoPanelProps> = ({ data, hasLegend, alignContent, baseline = true }) => {
    return (
        <div className={classNames(container, hasLegend && legend)}>
            <Descriptions
                className={alignContent && aligned}
                items={data}
                column={1}
                layout="horizontal"
                colon={false}
                labelStyle={{
                    alignItems: baseline ? "baseline" : "center",
                }}
                contentStyle={{
                    alignItems: "center",
                    fontWeight: "semi-bold",
                    lineHeight: "1.5",
                }}
            />
        </div>
    );
};

export default InfoPanel;
