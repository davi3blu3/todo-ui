import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  @ViewChild('task') task: ElementRef;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  handleClick(task) {
    this.todoService
      .createTodo(task)
      .subscribe(
        data => console.log('success', data),
        error => console.log('error', error)
      );
    this.task.nativeElement.value = '';
  }
}
