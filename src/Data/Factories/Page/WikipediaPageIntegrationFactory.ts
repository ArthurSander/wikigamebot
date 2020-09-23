import { injectable } from "inversify";
import { RandomPageIntegration } from "../../Integrations/Wikipedia/RandomPageIntegration";
import { IPageIntegrationFactory } from "../../Interfaces/Factories/IPageIntegrationFactory";
import { IGetPageIntegration } from "../../Interfaces/Integrations/Page/IGetPageIntegration";
import { IRandomPageIntegration } from "../../Interfaces/Integrations/Page/IRandomPageIntegration";

@injectable()
export class WikipediaPageIntegrationFactory implements IPageIntegrationFactory {

    createRandomPageIntegration(): IRandomPageIntegration {
        return new RandomPageIntegration();
    }
    createGetPageIntegration(id: string): IGetPageIntegration {
        throw new Error("Method not implemented.");
    } 

}