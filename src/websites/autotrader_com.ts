import { makeIsSupported, yearIsSupported, getSupportYearRange } from '../car_support';
import { ModelParser } from '../model_parser';
import { Website, SupportYearRange } from '../interface';
import { MODEL } from '../constants';
import { compatibleCars } from '../compatible_cars'

export class AutotraderCom implements Website {
    private carElts: any;
    private makeModelElt = 'makeModel';
    constructor() {
        this.carElts = document.getElementsByClassName('inventory-listing');
    }
    public getModelInfo(modelInfoElt: any) {
        return modelInfoElt.querySelector("[data-cmp='subheading']").textContent;
    }
    /**
     * Filter out the supported makes to reduce the number of entries we need to check.
     * @returns supportedMakes
     */
    private getSupportedMakeElts(): Array<any> {
        const supportedMakes = [...this.carElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            console.log('modelInfo:', modelInfo);
            return makeIsSupported(modelInfo);
        });
        return supportedMakes;
    }
    private static isSupported(model: string, year: number) {
        const modelMatches = (parsedModel: string, supportedModel: string): boolean => {
            return supportedModel.includes(parsedModel);
        }
        const matchingCars = compatibleCars.filter(car => {
            const supportedYearRange: SupportYearRange = getSupportYearRange(car[MODEL]);
            if (modelMatches(model.toLowerCase(), car[MODEL].toLowerCase())  
                && yearIsSupported(year, supportedYearRange)
            ) {
                return true;
            }
        });
        if (matchingCars.length > 0) {
            return true;
        }
        return false;
    }
    private getSupportedModelElts(supportedMakesElts: Array<HTMLElement>): Array<any> {
        const supportedModels = [...supportedMakesElts].filter((carElt: any) => {
            const modelInfo = this.getModelInfo(carElt);
            const modelParser = new ModelParser(modelInfo);
            const modelYear = modelParser.getYear();
            const model = modelParser.getModel();
            return AutotraderCom.isSupported(model, modelYear);
        });
        return supportedModels;
    }
    public getTargetNode(): Element | Document {
        return document;
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
            supportedModelElts[i].querySelector("[data-cmp='subheading']")[0].appendChild(commaBtn);
        }
    }
    
    public getMakeModelElement(supportedModelElt: any) {
        return supportedModelElt.querySelector("[data-cmp='subheading']")[0];
    }

    public mutations(mutations: []): boolean {
        return mutations.length > 0;
    }
}
