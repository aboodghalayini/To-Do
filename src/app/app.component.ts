import { Component, ElementRef, ViewChild } from '@angular/core';

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
  @ViewChild('task') task!: ElementRef;
  title = 'To Do list';
  list:any[]=[];
  hasError = false;

  addtask(item:string){
    console.log('hi')
    this.hasError = !this.task.nativeElement.value 
    if (!this.hasError) {
      this.list.push({id:this.list.length,name:item,});
    }
  }
  removetask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
  checklist(item:string){
    console.log("hi");
    item;
  }
}
