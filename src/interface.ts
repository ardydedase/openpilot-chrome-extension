export enum Compatibility {
    Supported = "Supported Car",
    Community = "Community Maintained",
    Unknown = "Unknown",
}

export interface SupportDetailsInterface {
    make: string;
    model: string;
    supportedPackage: string;
    acc: string;
    compatibility: Compatibility;
}

export interface SupportYearRange {
    start: number;
    end: number;
}

export interface Website {
    getModelInfo(modelInfoElt: any): string;
    getElementsToUpdate(): Array<any>;
    updatePage(commaBtn: any): void;    
}