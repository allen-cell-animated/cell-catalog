import React, { useState } from "react";
import { Descriptions, Divider, Flex, Modal } from "antd";
import Icon, { InfoCircleOutlined } from "@ant-design/icons";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { DarkBlueHoverButton } from "./shared/Buttons";
import { UnpackedGene } from "../component-queries/types";

const {
    modal,
    title,
    header,
    subTitle,
    clone,
    actionButton,
} = require("../style/modal.module.css");
const LinkOut = require("../img/external-link.svg");

interface ParentalLineModalProps {
    image?: IGatsbyImageData | null;
    formattedId: string;
    cloneNumber: number;
    status: string;
    taggedGene: UnpackedGene[];
    tagLocation: string[];
    fluorescentTag: string[];
    suppressRowClickRef: React.MutableRefObject<boolean>;
}
const ParentalLineModal = (props: ParentalLineModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.stopPropagation();
        props.suppressRowClickRef.current = true;
        setIsModalOpen(true);
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        props.suppressRowClickRef.current = false;
        setIsModalOpen(false);
    };
    const image = getImage(props.image ?? null);
    const headerElement = (
        <div className={header}>
            <div className={title}>Parental Line </div>
            <Divider type="vertical" />
            <div className={subTitle}>{props.formattedId} </div>
            <div className={clone}> cl. {props.cloneNumber}</div>
        </div>
    );

    if (props.status === "coming soon") {
        return <>{props.formattedId}</>;
    }
    
    const { symbol, name } = props.taggedGene[0];
    const fluorescentTag  = props.fluorescentTag[0];  
    const tagLocation = props.tagLocation[0];
    const parentalLineItems = [
        {
            key: "1",
            label: "Gene Symbol",
            children: symbol,
        },
        {
            key: "2",
            label: "Gene Name",
            children: name,
        },
        {
            key: "3",
            label: "Fluorescent Tag",
            children: fluorescentTag,
        },
        {
            key: "4",
            label: "Tag Location",
            children: tagLocation,
        },
    ];

    return (
        <>
            <DarkBlueHoverButton onClick={(e) => showModal(e)}>
                {props.formattedId} {<InfoCircleOutlined />}
            </DarkBlueHoverButton>
            <Modal
                title={headerElement}
                open={isModalOpen}
                onCancel={(e) => handleCancel(e)}
                width={555}
                centered={true}
                className={modal}
                footer={
                    <div style={{ textAlign: "center" }}>
                        <DarkBlueHoverButton
                            style={{
                                width: 480,
                                borderWidth: "2px",
                                backgroundColor: "white",
                            }}
                            href="https://www.allencell.org/cell-catalog.html"
                            target="_blank"
                            className={actionButton}
                        >
                            <Flex
                                justify="flex-end"
                                gap={110}
                                style={{
                                    width: "100%",
                                    fontWeight: 600,
                                }}
                            >
                                Go to Parental Line
                                <Icon component={LinkOut} />
                            </Flex>
                        </DarkBlueHoverButton>
                    </div>
                }
            >
                <Flex justify="space-between" gap={16}>
                    <div style={{ width: "192px", display: "block" }}>
                        {image && (
                            <GatsbyImage
                                alt={`${props.formattedId} thumbnail image`}
                                image={image}
                            />
                        )}
                    </div>
                    <Descriptions
                        column={1}
                        items={parentalLineItems}
                        layout="horizontal"
                        colon={false}
                        labelStyle={{
                            alignItems: "center",
                            width: "142px",
                            fontSize: "16px",
                        }}
                        contentStyle={{
                            alignItems: "center",
                            fontSize: "18px",
                            fontWeight: "semi-bold",
                        }}
                    />
                </Flex>
            </Modal>
        </>
    );
};

export default ParentalLineModal;
