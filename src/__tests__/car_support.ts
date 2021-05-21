import { 
    makeIsSupported, 
    modelYearIsSupported, 
    getSupportDetails, 
    yearIsSupported,
    getReferenceLink,
} from '../car_support';
import { Compatibility, SupportYearRange } from '../interface';


test("filterMake unsupported", () => {
    const unsupportedMake = makeIsSupported('2020 Mazda Mazda3');
    expect(unsupportedMake).toBeFalsy();    
});  

test("filterMake supported", () => {
    const supportedmake = makeIsSupported('2021 Hyundai Sonata');
    expect(supportedmake).toBeTruthy();
});

test("modelYearIsSupported", () => {
    expect(modelYearIsSupported('Corolla', 2021)).toBeTruthy();
    expect(modelYearIsSupported('RAV4', 2021)).toBeTruthy();
});

const supportYearRange: SupportYearRange = {
    start: 2019,
    end: 2021,
}
test("getSupportDetails", () => {
    const accord = getSupportDetails("Accord", 2019);
    expect(accord.acc).toBe('Stock');
    expect(accord.make).toBe('Honda');
    expect(accord.model).toBe('Accord 2018-20');
    expect(accord.supportedPackage).toBe('All');

    const rav4 = getSupportDetails("RAV4", 2021);
    expect(rav4.acc).toBe('openpilot');
    expect(rav4.make).toBe('Toyota');
    expect(rav4.model).toBe('Rav4 2019-21');
    expect(rav4.supportedPackage).toBe('All');    
});

test("yearIsSupported", () => {
    expect(yearIsSupported(2018, supportYearRange)).toBeFalsy();
    expect(yearIsSupported(2019, supportYearRange)).toBeTruthy();
    expect(yearIsSupported(2020, supportYearRange)).toBeTruthy();
});

test("getReferenceLink", () => {
    expect(getReferenceLink(Compatibility.Community))
        .toEqual("https://github.com/commaai/openpilot/blob/master/README.md#community-maintained-cars-and-features");
    expect(getReferenceLink(Compatibility.Supported))
        .toEqual("https://github.com/commaai/openpilot/blob/master/README.md#supported-cars");
})