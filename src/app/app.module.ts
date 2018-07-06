import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
//load Router
import { AppRoutingModule } from './app-routing.module';

//load components
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { TodosComponent } from './todos/todos.component';
import { TodoFormAddComponent } from './todos/todo-form-add.component';
import { TodoFormEditComponent } from './todos/todo-form-edit.component';
import { TodoDeleteComponent } from './todos/todo-delete.component';

//importing material
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  
  declarations : [
    AppComponent,
    DashboardComponent,
    TodosComponent,
    TodoFormAddComponent,
    TodoFormEditComponent,
    TodoDeleteComponent
  ],


  bootstrap: [AppComponent]

})
export class AppModule { }