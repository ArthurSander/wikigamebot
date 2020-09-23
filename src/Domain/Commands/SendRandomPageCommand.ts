import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { INTERFACE_SYMBOLS } from "../../Infrastructure/IoC/InterfaceSymbols";
import { ISendRandomPageCommand } from "../Interfaces/Commands/ISendRandomPageCommand";
import { IPageRepository } from "../Interfaces/Repositories/IPageRepository";

@injectable()
export class SendRandomPageCommand implements ISendRandomPageCommand {
    private _pageRepository: IPageRepository;

    public constructor (
        @inject(INTERFACE_SYMBOLS.IPageRepository) pageRepository: IPageRepository
    ) { 
        this._pageRepository = pageRepository;
    }

    execute(message: Message): void {
        this._pageRepository.random().then(page => {
            message.channel.send(page.url);
        });
    }
}