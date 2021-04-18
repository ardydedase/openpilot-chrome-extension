import { makeIsSupported } from '../utils';

test("filterMake", () => {
    const unsupportedMake = makeIsSupported('2020 Mazda Mazda3');
    expect(unsupportedMake).toBeFalsy();    
    const supportedmake = makeIsSupported('2021 Hyundai Sonata');
    expect(supportedmake).toBeTruthy();
});  