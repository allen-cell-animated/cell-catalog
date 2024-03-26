import React from 'react'
import { CellLineTemplate } from '../../templates/cell-line'
import { TemplateProps } from './types';
import { Tag, Space } from "antd";


const CellLinePreview = ({ entry, widgetFor }: TemplateProps) => {
    const status = entry.getIn(["data", "status"]);
    const tagColor = () => {
        switch (status) {
            case "done":
                return "green";
            case "coming soon":
                return "orange";
            case "in progress":
                return "red";
            default:
                return "blue";
        }
    };
    const statusInfo = () => {
        switch (status) {
            case "done":
                return "All the data will be shown online";
            case "coming soon":
                return "This cell line will appear in the table, but won't have any subpages";
            case "in progress":
                return "This cell line won't show on website at all ";
            default:
                return "This cell line won't show on website at all ";
        }
    };
    return (
        <Space direction="vertical" size="small" style={{width: "80%"}}>
            <Tag color={tagColor()}>{status}</Tag>
            <>{statusInfo()}</>
            <CellLineTemplate
                cellLineId={entry.getIn(["data", "cell_line_id"])}
                cloneNumber={entry.getIn(["data", "clone_number"])}
                gene={entry.getIn(["data", "gene"])}
                tagLocation={entry.getIn(["data", "tag_location"])}
                thumbnail={widgetFor("thumbnail_image")}
                alleleCount={entry.getIn(["data", "allele_count"])}
                fluorescentTag={entry.getIn(["data", "fluorescent_tag"])}
                parentalLine={entry.getIn(["data", "parental_line"])}
            />
        </Space>
    );
};

export default CellLinePreview
