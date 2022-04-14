/**
 * This file was generated from Typewriter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export type RenderModeEnum = "text" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TextListType {
    text: DynamicValue<string>;
}

export interface TextListPreviewType {
    text: string;
}

export interface TypewriterContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    renderMode: RenderModeEnum;
    loop: boolean;
    delay: number;
    deleteSpeed: number;
    cursor: string;
    textList: TextListType[];
}

export interface TypewriterPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: RenderModeEnum;
    loop: boolean;
    delay: number | null;
    deleteSpeed: number | null;
    cursor: string;
    textList: TextListPreviewType[];
}
