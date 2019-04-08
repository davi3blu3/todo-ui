import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Rx from 'rxjs';

import { TodoItem } from './../data/todo-item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:5001/api/todo';

  constructor(private httpClient: HttpClient) {}

  public getAllTodos() {
    console.log('api service getAllTodos was called');
    const endpoint = `${this.apiUrl}`;
    return this.httpClient.get<TodoItem[]>(endpoint);
  }

  public postTodo(task: string) {
    const endpoint = `${this.apiUrl}`;
    const payload = new TodoItem(task, false);
    return this.httpClient.post<TodoItem>(endpoint, payload);
  }

  public updateTodo(todo: TodoItem) {
    const endpoint = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.put<Response>(endpoint, todo);
  }

  public deleteTodo(id: number) {
    const endpoint = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<Response>(endpoint);
  }
}
