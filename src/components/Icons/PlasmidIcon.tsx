import React from "react";
import classNames from "classnames";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

const Plasmid = require("../../img/plasmid.svg");

interface PlasmidIconProps extends IconComponentProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

const PlasmidIcon: React.FC<PlasmidIconProps> = ({
    size = 28,
    className,
    style,
    ...props
}) => {

    const mergedStyle: React.CSSProperties = {
        fontSize: `${size}px`,
        ...style,
    };

    return (
        <Icon
            className={classNames("plasmid-icon", className)}
            component={Plasmid} 
            style={mergedStyle}
            {...props}
        />
    );
};

export default PlasmidIcon;
