import { compatibleCars } from './compatible_cars';
import { SupportDetailsInterface, SupportYearRange, Compatibility } from './interface';
import { MODEL, MAKE, SUPPORTED_PACKAGE, ACC, COMPATIBILITY } from './constants';

// This seems to be a more generic function across websites
export const makeIsSupported = (makeModel: string): boolean => {
    if (compatibleCars.filter(car => makeModel.includes(car['Make'])).length > 0) {
        return true;
    }
    return false;
}

export const getSupportModel = (model: string): string => {
    const modelArray = model.split(" ");
    modelArray.pop();
    return modelArray.join(" ");
}

export const getSupportYearRange = (model: string): SupportYearRange => {
    const YEAR_PREFIX = "20";
    const getStartYear = (year: string): number => {
        const startYearRegex = new RegExp(/(\d{2})\-/g); 
        let startYearNumbers;
        while ((startYearNumbers = startYearRegex.exec(year)) != null) {
            return Number(YEAR_PREFIX + startYearNumbers[1]);
        }
        return 0;
    }
    const getEndYear = (year: string): number => {
        const endYearRegex = new RegExp(/\-(\d{2})/g);
        let endYearNumbers;
        while ((endYearNumbers = endYearRegex.exec(year)) != null) {
            return Number(YEAR_PREFIX + endYearNumbers[1]);
        }
        return 0;
    }
    const modelArray = model.split(" ");
    const yearStr = modelArray[(modelArray.length - 1)];
    const supportYearRange: SupportYearRange = {
        start: getStartYear(yearStr),
        end: getEndYear(yearStr),
    };

    return supportYearRange;
}

export const yearIsSupported = (year: number, yearRange: SupportYearRange) => {
    return year >= yearRange.start && year <= yearRange.end;
}

export const getSupportDetails = (model: string, year: number): SupportDetailsInterface => {
    let supportDetails: SupportDetailsInterface = {
        make: '',
        model: '',
        supportedPackage: '',
        acc: '',
        compatibility: Compatibility.Unknown,
    };
    compatibleCars.forEach((car) => {
        const supportedModel: string = getSupportModel(car[MODEL]);
        const supportedYearRange: SupportYearRange = getSupportYearRange(car[MODEL]);
        if (model.toLowerCase().includes(supportedModel.toLowerCase()) && yearIsSupported(year, supportedYearRange)) {
            supportDetails = {
                make: car[MAKE],
                model: car[MODEL],
                supportedPackage: car[SUPPORTED_PACKAGE],
                acc: car[ACC],
                compatibility: car[COMPATIBILITY]
            }
        }
    });
    return supportDetails;
}

export const getReferenceLink = (compatibility: Compatibility): string => {
    let url = "https://github.com/commaai/openpilot/blob/master/README.md#supported-cars"
    if (compatibility === Compatibility.Community) {
      url = "https://github.com/commaai/openpilot/blob/master/README.md#community-maintained-cars-and-features";
    }
    return url;
}

export const getModel = (model: string): string => {
    // get rid of the year range and other strings we don't need. 
    // they are usually at the end of the array.
    let modelInfoArray = model.trim().split(" ");
    modelInfoArray.pop();
    return modelInfoArray.join(" ");
}