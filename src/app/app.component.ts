import { Component } from '@angular/core';

export class Friend {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public department: string,
    public email: string,
    public country: string
  ) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  list:any[]=[];
  addtask(item:string){
    this.list.push({id:this.list.length,name:item,});
  }
  removetask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
}
