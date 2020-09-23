import { Container } from "inversify";
import { IGeneratePageHandler } from "../../Application/Interfaces/Handlers/IGeneratePageHandler";
import { INTERFACE_SYMBOLS } from "../IoC/InterfaceSymbols";
import { IGeneralConfigurationFactory } from "./Interfaces/Factories/IGeneralConfigurationFactory";

export class Core {
    private _container: Container;

    public constructor (container: Container) {
        this._container = container;
    }

    public start() {
        var generalConfiguration = this._container.get<IGeneralConfigurationFactory>(INTERFACE_SYMBOLS.IGeneralConfigurationFactory).create();
        this._container.get<IGeneratePageHandler>(INTERFACE_SYMBOLS.IGeneratePageHandler).configure(generalConfiguration);
        
    }
}
