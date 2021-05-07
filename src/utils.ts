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
    console.log('modelInfoArray: ', modelInfoArray);
    return modelInfoArray.join(" ");
}

export const modelYearIsSupported = (model: string, year: number): boolean => {    
    const matchingCars = officalCars.filter(car => {
        if (car[MODEL].toLocaleLowerCase().includes(model.toLowerCase()) && car[MODEL].includes(String(year % 100))) {
            return true;
        }
    });
    console.log('matchingCars: ', matchingCars);
    if (matchingCars.length > 0) {
        return true;
    }
    return false;
}

interface SupportDetailsInterface {
    make: String;
    model: String;
    year: Number;
    acc: String;
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
    });
    return supportDetails;
}