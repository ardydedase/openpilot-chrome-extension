/**
 * Used for parsed car model info from the supported website.
 */
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
     * This is different from the other getModel for supported cars list.
     * @returns model
     */
    getModel(): string {
        const modelInfoArray = this.modelInfo.trim().split(" ").slice(2);
        return modelInfoArray.join(" ");
    }    

}