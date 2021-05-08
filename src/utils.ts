import { officalCars } from './offical_cars';

const MODEL = 'Model (US Market Reference)';

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
    const matchingCars = officalCars.filter(car => {
        if (car[MODEL].toLocaleLowerCase().includes(model.toLowerCase()) && car[MODEL].includes(String(year % 100))) {
            return true;
        }
    });
    if (matchingCars.length > 0) {
        return true;
    }
    return false;
}

interface SupportDetailsInterface {
    make: string;
    model: string;
    year: number;
    acc: string;
}

export const getSupportModel = (model: string): string => {
    const modelArray = model.split(" ");
    modelArray.pop();
    return modelArray.join(" ");
}

export const getSupportYear = (model: string): number => {
    const modelArray = model.split(" ");
    console.log('model year:', modelArray[(modelArray.length - 1)]);
    const yearStr = modelArray[(modelArray.length - 1)];
    // I hate to use regex

    // const yearRegex = /\d{4}/g;
    const yearRegex = /\-(\d{2})/g;

    const numbers = yearStr.match(yearRegex);
    console.log('numbers:', numbers);
    return 0;
}

export const getSupportDetails = (model: string, year: number): SupportDetailsInterface => {
    // TODO: Get support details
    const supportDetails: SupportDetailsInterface = {
        make: "Toyota",
        model: "Corolla",
        year: 2021,
        acc: "openpilot"
    };
    officalCars.filter((car) => {
        console.log('car model: ', car[MODEL]);
        const supportedModel: string = getSupportModel(car[MODEL]);
        console.log('supportedModel:', supportedModel);
        const supportedYear: number = getSupportYear(car[MODEL]);
        console.log('getSupportYear:', supportedYear);
    });
    return supportDetails;
}