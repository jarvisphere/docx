import { XmlComponent } from '../xml-components';
export interface ICitationFieldOptions {
    readonly tag: string;
    readonly displayText: string;
    readonly locator?: string;
    readonly extraTags?: readonly string[];
    readonly locale?: number;
    readonly superScript?: boolean;
}
export declare class CitationField extends XmlComponent {
    constructor(options: ICitationFieldOptions);
}
