import { Client } from "discord.js";

export interface IClientFactory {
    create(): Client;
}