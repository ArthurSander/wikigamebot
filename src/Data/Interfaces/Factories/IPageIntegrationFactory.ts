import { IGetPageIntegration } from "../Integrations/Page/IGetPageIntegration";
import { IRandomPageIntegration } from "../Integrations/Page/IRandomPageIntegration";

export interface IPageIntegrationFactory { 
    createRandomPageIntegration(): IRandomPageIntegration;
    createGetPageIntegration(id: string): IGetPageIntegration;
}