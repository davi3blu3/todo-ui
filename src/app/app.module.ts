import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, TodoAddComponent, TodoListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
