import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";
import React from "react";

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
    };

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
