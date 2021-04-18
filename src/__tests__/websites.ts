import { Autotrader } from '../websites';

test("Autotrader", () => {
    const website = new Autotrader();
    website.updatePage();
    expect(website).toBeDefined();
});