import React from 'react'
import { DiseaseCatalogTemplate } from '../../templates/disease-catalog'
import { TemplateProps } from './types';

const DiseaseCatalogPreview = ({ entry, widgetFor }: TemplateProps) => {
    const props = {
        title: entry.getIn(["data", "title"]),
        content: widgetFor("body"),
        footerText: entry.getIn(["data", "footer_text"]),
    };

    return <DiseaseCatalogTemplate {...(props as any)} />;
};

export default DiseaseCatalogPreview;