import { Page } from "../../../../Models/Page";

export interface IGetPageIntegration {
    get(id: string): Promise<Page>;
}