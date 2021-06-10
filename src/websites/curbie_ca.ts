import { makeIsSupported, getSupportYearRange, yearIsSupported, getModel } from '../car_support';
import { ModelParser } from '../model_parser';
import { Website, SupportYearRange } from '../interface';
import { MODEL } from '../constants';
import { compatibleCars } from '../compatible_cars'


export class CurbieCa implements Website {
    private carElts: any;
    
    constructor() {
        // consider class= inventory-listing-body
        this.carElts = document.getElementsByClassName('cardiv');
        this.carElts = [...new Set(this.carElts)];
    }

    private cleanupModelIfo(modelInfo: string) {
        let cleanedUp = modelInfo.replace("Used", "");
        cleanedUp = cleanedUp.replace("Certified", "");
        cleanedUp = cleanedUp.trim();
        return cleanedUp;
    }

    public getTargetNode(): Element | Document {
        return document.getElementById('searchresult') || document;
    }

    public getModelInfo(modelInfoElt: any) {        
        const modelInfo = modelInfoElt.getElementsByClassName('carname')[0].innerHTML.replace('<br>', ' ');
        return modelInfo;
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
    private static isSupported(model: string, year: number) {
        const modelMatches = (parsedModel: string, supportedModel: string): boolean => {
            return supportedModel.includes(parsedModel) || parsedModel.includes(supportedModel);
        }
        const matchingCars = compatibleCars.filter(car => {
            const supportedYearRange: SupportYearRange = getSupportYearRange(car[MODEL]);
            if (modelMatches(model.toLowerCase(), getModel(car[MODEL].toLowerCase()))
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
            return CurbieCa.isSupported(model, modelYear);
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
            supportedModelElts[i].getElementsByClassName('carname')[0].appendChild(commaBtn);
        }
    }

    // supportedModelElts[i].getElementsByClassName('makeModel')[0].appendChild(targetElt);
    // ReactDOM.render(openPilotBadge(supportDetails), supportedModelElts[i].getElementsByClassName('makeModel')[0].getElementsByTagName('span')[0]);    
    public getMakeModelElement(supportedModelElt: any) {
        return supportedModelElt.getElementsByClassName('carname')[0];
    }

    public mutations(mutations: []): boolean {
        return mutations.length > 0 && mutations.length < 100;        
    }
}