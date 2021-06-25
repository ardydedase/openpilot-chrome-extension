import { AutotraderCa, CurbieCa } from '../websites';

test("autotrader.ca", () => {
    const website = new AutotraderCa();
    website.updatePage('');
    expect(website).toBeDefined();
});

test("curbie.ca", () => {
    const website = new CurbieCa();
    website.updatePage('');
    expect(website).toBeDefined();
});