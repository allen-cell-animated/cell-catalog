import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";
import React from "react";

const Plasmid = require("../../img/plasmid.svg");

type IconBaseProps = Omit<IconComponentProps, "ref" | "component">;

interface PlasmidIconProps extends IconBaseProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}
const PlasmidIcon: React.FC<PlasmidIconProps> = ({
    className,
    size = 28,
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
