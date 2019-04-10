import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { TodoItem } from '../data/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://localhost:5001/api/todo';
  public todoList = new BehaviorSubject<TodoItem[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllTodos() {
    const endpoint = `${this.apiUrl}`;
    this.httpClient.get<TodoItem[]>(endpoint).subscribe(data => {
      this.updateSubscription(data);
    });
  }

  public postTodo(task: string) {
    const endpoint = `${this.apiUrl}`;
    const payload = new TodoItem(task, false);
    return this.httpClient.post<TodoItem[]>(endpoint, payload);
  }

  public updateTodo(todo: TodoItem) {
    const endpoint = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.put<TodoItem[]>(endpoint, todo);
  }

  public deleteTodo(id: number) {
    const endpoint = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<TodoItem[]>(endpoint);
  }

  public updateSubscription(newList: TodoItem[]) {
    newList.sort((a, b) => a.id - b.id);
    this.todoList.next(newList);
  }
}
