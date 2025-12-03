import * as React from "react";
import { Row } from "antd";

// import CsvInput from "../../containers/CsvInput";
// import { AicsLogo } from "../Icons";
// import styles from "./style.css";

interface NavBarProps {
    selectedDataset: string;
}

class NavBar extends React.Component<NavBarProps> {
    public render(): JSX.Element {
        const { selectedDataset } = this.props;

        return (
            <div className={styles.pageHeader}>
                <Row align={"middle"}>
                    <a
                        href="https://allencell.org"
                        title="Allen Institute for Cell Science"
                        style={{ height: "41px" }}
                    >
                        {AicsLogo}
                    </a>
                    <span className={styles.verticalBar}>|</span>
                    <a href="/" className={styles.cfeHome}>
                        Cell Feature Explorer
                    </a>
                </Row>
                <div className={styles.viewerTitle}>{selectedDataset}</div>
            </div>
        );
    }
}

export default NavBar;
