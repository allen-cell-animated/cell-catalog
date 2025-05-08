import { Descriptions } from "antd";
import React from "react";
import type { DescriptionsProps } from "antd";

interface InfoPanelProps {
    data: DescriptionsProps["items"];
}

const { container } = require("../../style/info-panel.module.css");

const InfoPanel: React.FC<InfoPanelProps> = ({ data }) => {
    return (
        <div className={container}>
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
