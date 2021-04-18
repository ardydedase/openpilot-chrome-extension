import { makeIsSupported } from './utils';

export class Autotrader {
    private carElts: any;
    constructor() {
        console.log('constructor');
        this.carElts = document.getElementsByClassName('topSeller');
    }
    private getModelInfo(modelInfoElt: any) {
        return modelInfoElt.getElementsByClassName('makeModel')[0].textContent;
    }
    /**
     * Filter out the supported makes to reduce the number of entries we need to check.
     * @returns supportedMakes
     */
    private getSupportedMakeElts(): Array<HTMLElement> {
        const supportedMakes = [...this.carElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            return makeIsSupported(modelInfo);
        });
        return supportedMakes;
    }
    public updatePage() {
        const supportedMakesElts = this.getSupportedMakeElts();
        console.log('supportedMakesElts: ', supportedMakesElts);
        for (var i = 0, l = supportedMakesElts.length; i < l; i++) {
            const commaLogo = document.createElement('b');
            commaLogo.innerText = 'comma test';
            supportedMakesElts[i].getElementsByClassName('imgVehicleContainer')[0].appendChild(commaLogo);
        }
    }
}