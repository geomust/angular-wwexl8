import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class DataService {

  constructor() { }

 private data= [
    {id: 1, nume: 'Mere '},
    {id: 2, nume: 'Pere'},
    {id: 3, nume: 'Castane'},
    {id: 4, nume: 'Beri'},
    {id: 5, nume: 'Tuica'},
];
addData(id:number,nume:string)
{
    this.data.push({id:id,nume:nume});

}
getData()
{
    return this.data;
}
deleteMsg(msg:string) {
    const index: number = this.data.indexOf(msg);
    if (index !== -1) {
        this.data.splice(index, 1);
    }        
}
}

