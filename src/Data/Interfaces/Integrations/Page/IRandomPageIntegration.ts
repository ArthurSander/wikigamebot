import {Page} from '../../../../Models/Page';

export interface IRandomPageIntegration { 
    get(): Promise<Page>;
}