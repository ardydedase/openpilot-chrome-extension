import { 
    makeIsSupported, 
    getYear, 
    getModel, 
    modelYearIsSupported, 
    getSupportDetails, 
    yearIsSupported,
} from '../utils';
import { SupportDetailsInterface, SupportYearRange } from '../interface';


test("filterMake unsupported", () => {
    const unsupportedMake = makeIsSupported('2020 Mazda Mazda3');
    expect(unsupportedMake).toBeFalsy();    
});  

test("filterMake supported", () => {
    const supportedmake = makeIsSupported('2021 Hyundai Sonata');
    expect(supportedmake).toBeTruthy();
});

test("getYear", () => {
    expect(getYear('2021 Hyundai Sonata')).toBe(2021);
    expect(getYear('Toyota Corolla 2020')).toBe(2020);
});

test("getModel", () =>  {
    expect(getModel('2021 Hyundai Sonata')).toBe('Sonata');
});

test("modelYearIsSupported", () => {
    expect(modelYearIsSupported('Corolla', 2021)).toBeTruthy();
});

const supportYearRange: SupportYearRange = {
    start: 2019,
    end: 2021,
}
test("getSupportDetails", () => {
    const supportDetails = getSupportDetails("Accord", 2019);
    expect(supportDetails.acc).toBe('Stock');
    expect(supportDetails.make).toBe('Honda');
    expect(supportDetails.model).toBe('Accord 2018-20');
    expect(supportDetails.supportedPackage).toBe('All');
});

test("yearIsSupported", () => {
    expect(yearIsSupported(2018, supportYearRange)).toBeFalsy();
    expect(yearIsSupported(2019, supportYearRange)).toBeTruthy();
    expect(yearIsSupported(2020, supportYearRange)).toBeTruthy();
});