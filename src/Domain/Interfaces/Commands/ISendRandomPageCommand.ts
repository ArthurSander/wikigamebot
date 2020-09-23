import { Message } from "discord.js";

export interface ISendRandomPageCommand {
    execute(message: Message): void;
}