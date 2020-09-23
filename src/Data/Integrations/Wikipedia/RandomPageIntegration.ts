import { Integration } from "../Integration";
import { Page } from "../../../Models/Page";
import { Sources } from "../../../Enums/Sources";
import { IRandomPageIntegration } from "../../Interfaces/Integrations/Page/IRandomPageIntegration";
import { inject, injectable } from "inversify";

const https = require('https');

@injectable()
export class RandomPageIntegration extends Integration implements IRandomPageIntegration {
    
    private requestOptions = {
        hostname: 'pt.wikipedia.org',
        port: 443,
        path: '/w/api.php?action=query&format=json&generator=random&prop=info&inprop=url',
        method: 'GET'
    }
    
    get(): Promise<Page> {
        return new Promise<Page>((resolve) => {
            this.makeRequest().then((data: any) => {
                resolve(this.parseResponse(data));
            });
        });
    } 

    private makeRequest(): Promise<any> { 
        return new Promise((resolve, reject) => {
            let req = https.request(this.requestOptions, (response: any) => {
                let chunks_of_data: any[] = [];
    
                response.on('data', (fragments: any) => {
                    chunks_of_data.push(fragments);
                });
    
                response.on('end', () => {
                    let response_body = Buffer.concat(chunks_of_data).toString();
                    resolve(JSON.parse(response_body));
                });
    
                response.on('error', (error: any) => {
                    reject(error);
                });
            });

            req.end();
        });
    }

    private parseResponse(responseData: any): Page { 
        var page = new Page(); 
        var pageObject = responseData.query.pages[Object.keys(responseData.query.pages)[0]];
        page.id = pageObject.pageid;
        page.source = Sources.Wikipedia;
        page.title = pageObject.title;
        page.url = pageObject.fullurl;
        return page;
    }

}