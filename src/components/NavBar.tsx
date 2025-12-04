import React from "react";

const AllenLogo = require("../img/aics-logo-white.png");

const { content, divider, logoLink, pageHeader, titleLink } =
    require("../style/navbar.module.css");

const NavBar: React.FC = () => {
    return (
        <div className={pageHeader}>
            <div className={content}>
                <a
                    href="https://allencell.org"
                    title="Allen Institute for Cell Science"
                    className={logoLink}
                >
                    <img
                        src={AllenLogo.default || AllenLogo}
                        alt="Allen Institute Logo"
                        style={{ height: "36px" }}
                    />
                </a>
                <span className={divider}>|</span>
                <a href="/" className={titleLink}>
                    Allen Cell Collection
                </a>
            </div>
        </div>
    );
};

export default NavBar;
