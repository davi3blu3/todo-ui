import { Component, OnInit } from '@angular/core';

import { TodoService } from './../../services/todo.service';
import { TodoItem } from './../../data/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.todoList.subscribe(
      data => {
        this.todoList = data;
      },
      error => {
        console.log('error:', error);
      }
    );
  }

  onCheckToggle(todo) {
    this.todoService.updateTodo(todo).subscribe(
      data => {
        this.todoService.todoList.next(data);
      },
      error => {
        console.log('error:', error);
      }
    );
  }

  onDeleteClick(todoId) {
    this.todoService.deleteTodo(todoId).subscribe(
      data => {
        this.todoService.todoList.next(data);
      },
      error => {
        console.log('error:', error);
      }
    );
  }
}
