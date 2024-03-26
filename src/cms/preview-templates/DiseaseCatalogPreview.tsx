import React from 'react'
import { DiseaseCatalogTemplate } from '../../templates/disease-catalog'
import { TemplateProps } from './types';

const DiseaseCatalogPreview = ({ entry, widgetFor }: TemplateProps) => (
    <DiseaseCatalogTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
        footerText={entry.getIn(["data", "footer_text"])}
        coriellImage={entry.getIn(["data", "coriell_image"])}
        coriellLink={entry.getIn(["data", "coriell_link"])}
        main={entry.getIn(["data", "main"])}
    />
);


export default DiseaseCatalogPreview;
