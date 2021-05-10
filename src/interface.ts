export enum Compatibility {
    Supported = "Supported Car",
    Community = "Community Maintained Cars and Features",
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
