import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { List, ToDoList } from '../models/ToDo.model';
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  baseURL = 'https://api.joinnextstep.com/api';
  constructor(private http:HttpClient) { }
  getList():Observable<ToDoList[]>{
    return this.http.get<ToDoList[]>(`${this.baseURL}/todo`);
  }
  createList(payload: ToDoList): Observable<ToDoList> {
    return this.http.post<ToDoList>(`${this.baseURL}/todo`, payload);
  }
  delete(id:string):Observable<string>{
    return this.http.delete<string>(this.baseURL+'/todo/'+id);
  }
  update(id: string,name:string, s:string):Observable<ToDoList> {
    return this.http.put<ToDoList>(this.baseURL+`/todo/${id}`,{name,status:s});
  }
}
