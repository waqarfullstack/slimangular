import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


//LOADING COMPONENTS required by routes
import { TodosComponent } from './todos/todos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TodoFormAddComponent } from './todos/todo-form-add.component';
import { TodoFormEditComponent } from './todos/todo-form-edit.component';
import { TodoDeleteComponent } from './todos/todo-delete.component';


 const ROUTES : Routes = [
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'todo/add',
      component: TodoFormAddComponent
    },
    {
      path: 'todo/edit/:id',
      component: TodoFormEditComponent
    },
    {
      path: 'todo/delete/:id',
      component: TodoDeleteComponent
    }
      
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}