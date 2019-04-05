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

  // TODO: All methods for displaying total todo list should be moved into AppComponent?
  // Because the full list is impacted by the Add, while Complete and Delete just affect the list
  ngOnInit() {
    this.updateView();
  }

  updateView() {
    this.todoService.getTodos().subscribe(
      res => {
        this.todoList = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  onNewTodoAdd() {
    this.updateView();
  }

  handleCheck(item) {
    this.todoService.updateTodo(item).subscribe(
      data => {
        console.log('success', data);
        this.updateView();
      },
      error => console.log('error', error)
    );
  }

  deleteItem(id) {
    this.todoService.deleteTodo(id).subscribe(
      data => {
        console.log('success', data);
        this.updateView();
      },
      error => console.log('error', error)
    );
    this.updateView();
  }
}
