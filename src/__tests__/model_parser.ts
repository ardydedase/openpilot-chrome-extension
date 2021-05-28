import { ModelParser } from '../model_parser';

test("getYear", () => {
    expect((new ModelParser('2021 Hyundai Sonata')).getYear()).toBe(2021);
    expect((new ModelParser('Toyota Corolla 2020')).getYear()).toBe(2020);
    expect((new ModelParser('2021 Toyota Rav4')).getYear()).toBe(2021);
});

test("getModel", () =>  {
    expect((new ModelParser('2021 Hyundai Sonata')).getModel()).toBe('Sonata');
    expect((new ModelParser('2021 Toyota RAV4')).getModel()).toBe('RAV4');
    expect((new ModelParser('2021 Hyundai Palisade AWD SEL w/ Winter Package')).getModel()).toBe('Palisade AWD SEL w/ Winter Package');
});
