import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { TodoFormAddComponent } from './todo-form-add.component';
import { TodoFormEditComponent } from './todo-form-edit.component';

@Component({
  selector: 'todo',
  providers: [TodoService],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

export class TodosComponent implements OnInit {

	title = "Todos";
  todos : Todo[];
  show :boolean = false;

	constructor(private todoService: TodoService) {
    
	}

  ngOnInit() : void {
    //fetch all todos and show them on page as listing

    this.todoService.getTodos()
    .subscribe(todos => {
      this.todos = todos;
      if (this.todos.length) {
        this.show = true;
      }
    });
  }
}