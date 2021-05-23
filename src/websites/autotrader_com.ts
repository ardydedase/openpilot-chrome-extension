import { makeIsSupported, modelYearIsSupported } from '../car_support';
import { ModelParser } from '../model_parser';
import { Website } from '../interface';

export class AutotraderCom implements Website {
    private carElts: any;
    
    constructor() {
        // consider class= inventory-listing-body
        this.carElts = document.getElementsByClassName('inventory-listing-body');
        console.log('carElts:', this.carElts);
    }
    public getModelInfo(modelInfoElt: any) {
        return modelInfoElt.getElementsByClassName('makeModel')[0].textContent;
    }
    /**
     * Filter out the supported makes to reduce the number of entries we need to check.
     * @returns supportedMakes
     */
    private getSupportedMakeElts(): Array<any> {
        const supportedMakes = [...this.carElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            return makeIsSupported(modelInfo);
        });
        return supportedMakes;
    }
    private getSupportedModelElts(supportedMakesElts: Array<HTMLElement>): Array<any> {
        const supportedModels = [...supportedMakesElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            const modelParser = new ModelParser(modelInfo);
            const modelYear = modelParser.getYear();
            const model = modelParser.getModel();
            return modelYearIsSupported(model, modelYear);
        });
        return supportedModels;
    }

    public getElementsToUpdate(): Array<any> {
        const supportedMakesElts = this.getSupportedMakeElts();
        const supportedModelElts = this.getSupportedModelElts(supportedMakesElts);
        return supportedModelElts;
    }

    public updatePage(commaBtn: any): void {
        const supportedMakesElts = this.getSupportedMakeElts();
        const supportedModelElts = this.getSupportedModelElts(supportedMakesElts);
        for (var i = 0, l = supportedModelElts.length; i < l; i++) {
            supportedModelElts[i].getElementsByClassName('makeModel')[0].appendChild(commaBtn);
        }
    }

}