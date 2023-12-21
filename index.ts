import { Provider,ServerData } from "taulukko-messages";

export class RabbitProvider implements Provider{
    constructor(options:any){}
    async open():Promise<any>{
        throw new Error("Not implemented yet");
    }
    async close():Promise<any>{
        throw new Error("Not implemented yet");
    }
    async forceClose():Promise<any>{}
    data():ServerData{
        throw new Error("Not implemented yet");
    }
    publishers():Array<any>{
        throw new Error("Not implemented yet");
    }
    subscribers():Array<any>{
        throw new Error("Not implemented yet");
    }
    async sendAll(topic:string,data:any){
        throw new Error("Not implemented yet");
    }    
}