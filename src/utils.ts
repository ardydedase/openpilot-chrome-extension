import { officalCars } from './offical_cars';

// This seems to be a more generic function across websites
export const makeIsSupported = (makeModel: string) => {
    if (officalCars.filter(car => makeModel.includes(car['Make'])).length > 0) {
        return true;
    }
    return false;
}

export const getYear = (modelInfo: string): number => {
    var year: number = Number(modelInfo.replace(/\D/g, ""));
    return year;
}