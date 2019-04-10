import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {
  @ViewChild('task') task: ElementRef;
  @Output() todoAdded: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  onAddClick(task) {
    this.task.nativeElement.value = '';
    this.todoService.postTodo(task).subscribe(
      data => {
        this.todoService.updateSubscription(data);
      },
      error => {
        console.log('error:', error);
      }
    );
  }
}
