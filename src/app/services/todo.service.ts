import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TodoItem } from './../data/todo-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiRoot = 'https://localhost:5001/';

  constructor(private httpClient: HttpClient) {}

  public getTodos() {
    const apiURL = `${this.apiRoot}api/todo`;
    return this.httpClient.get<TodoItem[]>(apiURL);
  }

  public createTodo(task: string) {
    const apiUrl = `${this.apiRoot}api/todo`;
    const payload = new TodoItem(task, false);
    return this.httpClient.post<TodoItem>(apiUrl, payload);
  }

  public updateTodo(todo: TodoItem) {
    const apiUrl = `${this.apiRoot}api/todo/${todo.id}`;
    console.log('update called', todo);
    return this.httpClient.put<any>(apiUrl, todo);
  }

  public deleteTodo(id: number) {
    const apiUrl = `${this.apiRoot}api/todo/${id}`;
  }
}
