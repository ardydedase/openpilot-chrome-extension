import { officalCars } from './offical_cars';
import { SupportDetailsInterface, SupportYearRange } from './interface';

const MODEL = 'Model (US Market Reference)';
const MAKE = "Make";
const SUPPORTED_PACKAGE = "Supported Package";
const ACC = "ACC";

// This seems to be a more generic function across websites
export const makeIsSupported = (makeModel: string): boolean => {
    if (officalCars.filter(car => makeModel.includes(car['Make'])).length > 0) {
        return true;
    }
    return false;
}

export const getYear = (modelInfo: string): number => {
    const year: number = Number(modelInfo.replace(/\D/g, ""));
    return year;
}

export const getModel = (modelInfo: string): string => {
    const modelInfoArray = modelInfo.trim().split(" ").slice(2);
    return modelInfoArray.join(" ");
}

export const modelYearIsSupported = (model: string, year: number): boolean => {    
    console.log('model:', model);
    const matchingCars = officalCars.filter(car => {
        const supportedYearRange: SupportYearRange = getSupportYearRange(car[MODEL]);
        if (car[MODEL].toLowerCase().includes(model.toLowerCase()) 
            && yearIsSupported(year, supportedYearRange)
        ) {
            return true;
        }
    });
    if (matchingCars.length > 0) {
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
    };
    officalCars.forEach((car) => {
        const supportedModel: string = getSupportModel(car[MODEL]);
        const supportedYearRange: SupportYearRange = getSupportYearRange(car[MODEL]);
        if (supportedModel === model && yearIsSupported(year, supportedYearRange)) {
            supportDetails = {
                make: car[MAKE],
                model: car[MODEL],
                supportedPackage: car[SUPPORTED_PACKAGE],
                acc: car[ACC],
            }
        }
    });
    return supportDetails;
}