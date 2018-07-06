import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable, Subject } from 'rxjs';

@Component({
  //selector: 'todo-form',
  providers: [TodoService],
  templateUrl: './todo-form-add.component.html',
  styleUrls: ['./todo-form.component.css'],
})

export class TodoFormAddComponent implements OnInit {
	todo : Todo;
	
	constructor(private todoService : TodoService, private route: ActivatedRoute, private location: Location) {
	}

	//+ operator converts string to number
	
	ngOnInit() {
		this.todo = {id : 0, title : ""} as Todo;
	}

	onSave() : void {
		//there was two way binding so don't need to explicitly assign todo name
		if (this.todo.title) { 
			this.todoService.create(this.todo)
		    .subscribe(hero => {
		       this.goBack();
		    });
		} else {
			
		}
	}

	goBack(): void {
	  this.location.back();
	}
}