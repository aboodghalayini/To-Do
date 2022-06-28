export interface ToDoList{
    id : number;
    name : string;
    status : string;
}
export interface List<Type> {
    data: Type[];
    total: number;
    page: number;
    limit: number;
}