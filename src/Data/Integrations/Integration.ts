export abstract class Integration { 
    protected isStatusCodeSuccess (code: number): boolean{ 
        if(code >= 200 && code < 300) return true;
        return false;
    }
}