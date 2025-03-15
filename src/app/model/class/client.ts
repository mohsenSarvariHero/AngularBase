import { consumerAfterComputation } from "@angular/core/primitives/signals";

export class Client{
    clientId: number;
    address : string;
    city:string;
    
    
    constructor(){
    this.clientId = 0;
    this.address = "";
    this.city = "";
    }

}
