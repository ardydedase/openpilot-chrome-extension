import { AutotraderCa } from '../websites';

test("autotrader.ca", () => {
    const website = new AutotraderCa();
    website.updatePage('');
    expect(website).toBeDefined();
});