import React from "react";
import classNames from "classnames";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

const Tube = require("../../img/tube.svg");

interface TubeIconProps extends IconComponentProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

const TubeIcon: React.FC<TubeIconProps> = ({
    size = 40,
    className,
    style,
    ...props
}) => {
    const mergedStyle: React.CSSProperties = {
        fontSize: `${size}px`,
        ...style,
    } as React.CSSProperties;

    return (
        <Icon
            className={classNames("tube-icon", className)}
            component={Tube}
            style={mergedStyle}
            {...props}
        />
    );
};

export default TubeIcon;
