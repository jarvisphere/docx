import { DocPropertiesOptions } from '../../drawing/doc-properties/doc-properties';
import { IContext, IXmlableObject } from '../../xml-components';
import { IFloating } from '../../drawing';
import { OutlineOptions } from '../../drawing/inline/graphic/graphic-data/pic/shape-properties/outline/outline';
import { SolidFillOptions } from '../../drawing/inline/graphic/graphic-data/pic/shape-properties/outline/solid-fill';
import { IMediaTransformation } from '../../media';
import { Run } from '../run';
type CoreImageOptions = {
    readonly transformation: IMediaTransformation;
    readonly floating?: IFloating;
    readonly altText?: DocPropertiesOptions;
    readonly outline?: OutlineOptions;
    readonly solidFill?: SolidFillOptions;
};
type RegularImageOptions = {
    readonly type: "jpg" | "png" | "gif" | "bmp";
    readonly data: Buffer | string | Uint8Array | ArrayBuffer;
};
type SvgMediaOptions = {
    readonly type: "svg";
    readonly data: Buffer | string | Uint8Array | ArrayBuffer;
    readonly fallback: RegularImageOptions;
};
export type IImageOptions = (RegularImageOptions | SvgMediaOptions) & CoreImageOptions;
export declare const standardizeData: (data: string | Buffer | Uint8Array | ArrayBuffer) => Buffer | Uint8Array | ArrayBuffer;
export declare class ImageRun extends Run {
    private readonly imageData;
    constructor(options: IImageOptions);
    prepForXml(context: IContext): IXmlableObject | undefined;
}
export {};
