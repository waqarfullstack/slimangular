import { Component, Input, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable, Subject } from 'rxjs';

@Component({
  //selector: 'todo-form',
  providers: [TodoService],
  templateUrl: './todo-form-edit.component.html',
  styleUrls: ['./todo-form.component.css'],
})

export class TodoFormEditComponent implements OnInit {
	todo : Todo;
	
	constructor(private todoService : TodoService, private route: ActivatedRoute, private location: Location) {

		const id = +this.route.snapshot.paramMap.get('id');
		this.todoService.getTodo(id)
		    .subscribe(todo => this.todo = todo);
	}


	//+ operator converts string to number
	
	ngOnInit() {
		
		
	}

	onSave() : void {
		this.todoService.update(this.todo)
			.subscribe(todo => {
			this.todo = todo;
			this.goBack();
		});
	}

	goBack(): void {
	  this.location.back();
	}
}