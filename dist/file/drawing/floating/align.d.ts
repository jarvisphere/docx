import { HorizontalPositionAlign, VerticalPositionAlign } from '../../shared/alignment';
export declare const createAlign: (value: (typeof HorizontalPositionAlign)[keyof typeof HorizontalPositionAlign] | (typeof VerticalPositionAlign)[keyof typeof VerticalPositionAlign]) => XmlComponent;
