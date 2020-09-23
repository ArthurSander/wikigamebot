import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { ISendRandomPageCommand } from "../../Domain/Interfaces/Commands/ISendRandomPageCommand";
import { GeneralConfigurations } from "../../Infrastructure/Bootstrap/Configurations/GeneralConfigurations";
import { INTERFACE_SYMBOLS } from "../../Infrastructure/IoC/InterfaceSymbols";
import { IGeneratePageHandler } from "../Interfaces/Handlers/IGeneratePageHandler";

@injectable()
export class GeneratePageHandler implements IGeneratePageHandler {

    private readonly _randomPageCommand: ISendRandomPageCommand;

    public constructor(
        @inject(INTERFACE_SYMBOLS.ISendRandomPageCommand) randomPageCommand: ISendRandomPageCommand
    ) { 
        this._randomPageCommand = randomPageCommand;
    }

    configure(generalConfigurations: GeneralConfigurations): void {
        generalConfigurations.client.on('message', (message: Message) => {
            if(!message.guild) return;
            if(!message.member) return;
            if(!message.content.startsWith(`${generalConfigurations.commandPrefix}`)) return;
            
            switch(message.content) {
                case `${generalConfigurations.commandPrefix} random`:
                    this._randomPageCommand.execute(message);
                    break;
            }
        });
    } 

}