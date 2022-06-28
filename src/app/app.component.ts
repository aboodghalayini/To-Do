import { Component, OnInit} from '@angular/core';
import { ToDoList } from './models/ToDo.model';
import { ToDoListService } from './services/to-do-list.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'To Do list';
  list?:ToDoList[];
  count :number= 0;
  hasError = false;
  show = false;
constructor(private ToDoLists:ToDoListService) { }
ngOnInit(){
  this.getList();
}
getList(){
  this.ToDoLists.getList().subscribe(response => {this.list= response;});
}
createList(tasks:string,status:string){
  if (tasks===''){
    this.hasError=true;
    return;
  }
this.hasError=false;
this.ToDoLists.createList({id:this.count,name:tasks,status:status}).subscribe(Response=>{
  console.log(Response);this.getList();
},
(err) => console.log('Error Occurred (subscribe):', err),)
  this.count ++;
}
delete(id:number){
  this.ToDoLists.delete(String(id)).subscribe(() => this.getList());
  console.log('delet')
}
update(id:number,name:string,status:string,st:any){
  this.ToDoLists.update(String(id),name,status).subscribe(Response => {this.getList();});
  
  st.selectedIndex=status;
}
}
