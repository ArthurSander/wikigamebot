import { Client } from "discord.js";

export class GeneralConfigurations {
    
    public constructor (client: Client) {
        this.client = client;
    }

    public client: Client;

    public commandPrefix: string = "!";

}