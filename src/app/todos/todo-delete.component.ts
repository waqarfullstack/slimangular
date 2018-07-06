import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable, Subject } from 'rxjs';
import {Router} from "@angular/router";
@Component({
  //selector: 'todo-form',
  providers: [TodoService],
  template:`<ng-content></ng-content>`
})

export class TodoDeleteComponent implements OnInit {
	todo : Todo;
	constructor(private todoService : TodoService, private route: ActivatedRoute, private location: Location, private router: Router) {
		
		const id = +this.route.snapshot.paramMap.get('id');
		this.todoService.delete(id)
		    .subscribe(todo => {
		    	this.todo = todo;
		    	this.router.navigate(['/dashboard']);
		    });
	}


	//+ operator converts string to number
	
	ngOnInit() {
		
		
	}

}