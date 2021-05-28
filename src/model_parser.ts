export class ModelParser {
    private modelInfo: string;

    constructor(modelInfo: string) {
        this.modelInfo = modelInfo;
    }

    /**
     * Parses the car's year from the string pattern: "{year} {make} {model}""
     * @returns year
     */
    getYear(): number {
        const regex = new RegExp(/\d{4}/g); 
        let year;
        while ((year = regex.exec(this.modelInfo)) != null) {
            return Number(year[0]);
        }
        return 0;
    }

    /**
     * Parses the car's model from the string pattern: "{year} {make} {model}""
     * @returns model
     */
    getModel(): string {
        const modelInfoArray = this.modelInfo.trim().split(" ").slice(2);
        console.log('modelInfoArray:', modelInfoArray);
        return modelInfoArray.join(" ");
    }    

}