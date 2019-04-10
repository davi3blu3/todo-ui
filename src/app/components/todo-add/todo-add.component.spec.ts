import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { TodoService } from 'src/app/services/todo.service';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let mockTodoService;
  let fixture: ComponentFixture<TodoAddComponent>;

  beforeEach(async(() => {
    mockTodoService = jasmine.createSpyObj('todoService', [
      'postTodo',
      'updateSubscription'
    ]);

    TestBed.configureTestingModule({
      declarations: [TodoAddComponent],
      providers: [{ provide: TodoService, useValue: mockTodoService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
