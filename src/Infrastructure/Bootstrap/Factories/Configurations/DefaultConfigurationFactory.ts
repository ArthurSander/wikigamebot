import { inject, injectable } from "inversify";
import { INTERFACE_SYMBOLS } from "../../../IoC/InterfaceSymbols";
import { GeneralConfigurations } from "../../Configurations/GeneralConfigurations";
import { IClientFactory } from "../../Interfaces/Factories/IClientFactory";
import { IGeneralConfigurationFactory } from "../../Interfaces/Factories/IGeneralConfigurationFactory";

@injectable()
export class DefaultConfigurationFactory implements IGeneralConfigurationFactory {
    
    private readonly _clientFactory: IClientFactory;

    public constructor(@inject(INTERFACE_SYMBOLS.IClientFactory) clientFactory: IClientFactory) {
        this._clientFactory = clientFactory;
    }

    create(): GeneralConfigurations {
        let configs = new GeneralConfigurations(this._clientFactory.create());
        configs.commandPrefix = "!wiki";

        return configs;
    }

}