import { makeIsSupported, getYear } from './utils';

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
    private getSupportedMakeElts(): any {
        const supportedMakes = [...this.carElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            return makeIsSupported(modelInfo);
        });
        return supportedMakes;
    }
    private getSupportedModelElts(supportedMakesElts: Array<HTMLElement>) {
        const supportedModels = [...supportedMakesElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            console.log('carElt getModelInfo ->:', modelInfo);
            const modelYear = getYear(modelInfo);
        });
        // return supportedModels;
    }
    public updatePage() {
        const supportedMakesElts = this.getSupportedMakeElts();
        this.getSupportedModelElts(supportedMakesElts);
        for (var i = 0, l = supportedMakesElts.length; i < l; i++) {
            const commaLogo = document.createElement('b');
            commaLogo.innerText = 'comma test';
            supportedMakesElts[i].getElementsByClassName('imgVehicleContainer')[0].appendChild(commaLogo);
        }
    }
}