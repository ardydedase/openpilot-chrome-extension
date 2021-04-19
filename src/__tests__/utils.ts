import { makeIsSupported, getYear } from '../utils';

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