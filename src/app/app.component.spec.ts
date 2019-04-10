import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';

describe('AppComponent', () => {
  let mockTodoService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    mockTodoService = jasmine.createSpyObj('todoService', ['getAllTodos']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should initialize calling getAllTodos', () => {
    fixture.detectChanges();

    expect(mockTodoService.getAllTodos).toHaveBeenCalled();
  });
});
