import { Layout } from "antd";
import React from "react";

const { Header: AntHeader } = Layout;

const {
    bannerContainer,
    container,
    titleContainer,
} = require("../style/banner.module.css");

interface HeaderProps {
    title?: string;
    subtitle?: string;
    backgroundImageUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
    backgroundImageUrl = "",
    subtitle = "",
    title = "Cell Catalog",
}) => {
    const style = backgroundImageUrl
        ? { backgroundImage: `url(${backgroundImageUrl})` }
        : {};
    return (
        <AntHeader className={container} style={style}>
            <div className={bannerContainer}>
                <h1 className={titleContainer}>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </AntHeader>
    );
};

export default Header;
