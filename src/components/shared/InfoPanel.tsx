import { Descriptions } from "antd";
import React from "react";
import type { DescriptionsProps } from "antd";
import classNames from "classnames";

interface InfoPanelProps {
    data: DescriptionsProps["items"];
    hasLegend?: boolean;
}

const { container, legend } = require("../../style/info-panel.module.css");

const InfoPanel: React.FC<InfoPanelProps> = ({ data, hasLegend }) => {
    return (
        <div className={classNames(container, hasLegend && legend)}>
            <Descriptions
                items={data}
                column={1}
                layout="horizontal"
                colon={false}
                labelStyle={{
                    alignItems: "center",
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
