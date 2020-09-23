import { Page } from "../../../Models/Page";

export interface IPageRepository { 
    random(): Promise<Page> | null;
    get(id: string): Promise<Page> | null;
}