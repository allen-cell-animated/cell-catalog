import { RawImageData } from "../../component-queries/types";

export interface TemplateProps {
    entry: {
        getIn: (args: string[]) => unknown;
    };
    widgetFor: (arg: string) => unknown;
    getAsset: (arg: string) => unknown;
}

export interface Item {
    get: (key: string) => string | number | RawImageData["image"];
    toJS: () => unknown;
    size: number;
    forEach: (callback: (item: Item, index: number) => void) => void;
} 