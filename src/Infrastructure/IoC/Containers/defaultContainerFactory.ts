import { Container } from "inversify";
import { GeneratePageHandler } from "../../../Application/Handlers/GeneratePageHandler";
import { IGeneratePageHandler } from "../../../Application/Interfaces/Handlers/IGeneratePageHandler";
import { WikipediaPageIntegrationFactory } from "../../../Data/Factories/Page/WikipediaPageIntegrationFactory";
import { IPageIntegrationFactory } from "../../../Data/Interfaces/Factories/IPageIntegrationFactory";
import { WikipediaPageRepository } from "../../../Data/Repositories/API/WikipediaPageRepository";
import { SendRandomPageCommand } from "../../../Domain/Commands/SendRandomPageCommand";
import { ISendRandomPageCommand } from "../../../Domain/Interfaces/Commands/ISendRandomPageCommand";
import { IPageRepository } from "../../../Domain/Interfaces/Repositories/IPageRepository";
import { DefaultClientFactory } from "../../Bootstrap/Factories/Client/DefaultClientFactory";
import { DefaultConfigurationFactory } from "../../Bootstrap/Factories/Configurations/DefaultConfigurationFactory";
import { IClientFactory } from "../../Bootstrap/Interfaces/Factories/IClientFactory";
import { IGeneralConfigurationFactory } from "../../Bootstrap/Interfaces/Factories/IGeneralConfigurationFactory";
import { INTERFACE_SYMBOLS } from "../InterfaceSymbols";

export class DefaultContainerFactory {

    public create(): Container {
        let container = new Container();

        container.bind<IGeneralConfigurationFactory>(INTERFACE_SYMBOLS.IGeneralConfigurationFactory).to(DefaultConfigurationFactory);
        container.bind<IClientFactory>(INTERFACE_SYMBOLS.IClientFactory).to(DefaultClientFactory);
        container.bind<IPageRepository>(INTERFACE_SYMBOLS.IPageRepository).to(WikipediaPageRepository);
        container.bind<IPageIntegrationFactory>(INTERFACE_SYMBOLS.IPageIntegrationFactory).to(WikipediaPageIntegrationFactory);
        container.bind<ISendRandomPageCommand>(INTERFACE_SYMBOLS.ISendRandomPageCommand).to(SendRandomPageCommand);
        container.bind<IGeneratePageHandler>(INTERFACE_SYMBOLS.IGeneratePageHandler).to(GeneratePageHandler);

        return container;
    }

}