import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
    
  }

  ctitle = 'To-Do';
  list:any[]=[];
  addtask(item:string){
    this.list.push({id:this.list.length,name:item,});
  }
  removetask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }
 
}
