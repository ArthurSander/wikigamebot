import { Client } from "discord.js";
import { injectable } from "inversify";
import { IClientFactory } from "../../Interfaces/Factories/IClientFactory";

@injectable()
export class DefaultClientFactory implements IClientFactory {

    create(): Client {
        let client = new Client();

        client.on('ready', () => {
            console.log(`Logged in as ${client.user.tag}!`);
        });

        client.login(process.env.DEFAULT_BOT_TOKEN);
        
        return client;
    }

}