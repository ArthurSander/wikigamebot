import { Page } from "../../../Models/Page";
import { IPageRepository } from "../../../Domain/Interfaces/Repositories/IPageRepository";
import { IPageIntegrationFactory } from "../../Interfaces/Factories/IPageIntegrationFactory";
import { inject, injectable } from "inversify";
import { INTERFACE_SYMBOLS } from "../../../Infrastructure/IoC/InterfaceSymbols";

@injectable()
export class WikipediaPageRepository implements IPageRepository{

    private readonly _integrationFactory: IPageIntegrationFactory;

    public constructor (
       @inject(INTERFACE_SYMBOLS.IPageIntegrationFactory) integrationFactory: IPageIntegrationFactory,
    ){
        this._integrationFactory = integrationFactory;
    }
    
    random(): Promise<Page> {
        return this._integrationFactory.createRandomPageIntegration().get();
    }

    get(id: string): Promise<Page> {
        throw new Error("Method not implemented.");
    } 

}