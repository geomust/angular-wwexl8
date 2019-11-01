import { Component } from '@angular/core';
 import { DataService } from './data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  items=[];
  matrice=[];
 constructor(private dataService:DataService)   {}
  
save(id:number,nume:string)
{

    this.dataService.addData(id,nume);
}

show()
{
    this.items=this.dataService.getData();
}
deleteItem(msg:string)
{
    this.dataService.deleteMsg(msg);
}
 ngOnInit(){
   this.items=this.dataService.getData();
 }

}

