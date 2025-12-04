import { Layout } from "antd";
import React from "react";
import NavBar from "./NavBar";

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
    let style = {};
    if (backgroundImageUrl !== "") {
        style = { backgroundImage: `url(${backgroundImageUrl})` };
    }
    return (
        <>
        <NavBar />
        <AntHeader className={container} style={style}>
            <div className={bannerContainer}>
                <h1 className={titleContainer}>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </AntHeader>
        </>
    );
};

export default Header;
