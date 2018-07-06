//service for todos to be shared among components
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './todo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })


export class TodoService {
	
	private todosUrl = 'http://localhost/todo/slim3/public/index.php/api/todos';
	
	constructor(private http: HttpClient) {

	}

	getTodos (): Observable<Todo[]> {
	    return this.http.get<Todo[]>(this.todosUrl)
	      .pipe(
	      	tap(todos => this.log(`todos fetchded`)),
	        catchError(this.handleError('getTodos', []))
	      );
	  }


	getTodo(id: number): Observable<Todo> {
	    const url = `${this.todosUrl}/${id}`;
	    return this.http.get<Todo>(url).pipe(
	      catchError(this.handleError<Todo>(`getHero id=${id}`))
	    );
	  }
	 	

	create (todo: Todo): Observable<Todo> {
	    return this.http.post<Todo>(this.todosUrl, todo, httpOptions).pipe(
	      catchError(this.handleError<Todo>('addTodo'))
	    );
	  }

	update(todo:Todo) : Observable<Todo> {
		const url = `${this.todosUrl}/${todo.id}`;

		//sending update request to api

		return this.http.put<Todo>(url, todo, httpOptions).pipe(
	      catchError(this.handleError<Todo>('addTodo'))
	    );
	}

	delete(id : number): Observable<Todo> {
		const url = `${this.todosUrl}/${id}`;

		//sending update request to api

		return this.http.delete<Todo>(url, httpOptions).pipe(
		    catchError(this.handleError<Todo>('deleteTodo'))
 		 );

	}


	/**
	   * Handle Http operation that failed.
	   * Let the app continue.
	   * @param operation - name of the operation that failed
	   * @param result - optional value to return as the observable result
	   */
	 
	 private handleError<T> (operation = 'operation', result?: T) {
	    return (error: any): Observable<T> => {
	 
	      // TODO: send the error to remote logging infrastructure
	      console.error(error); // log to console instead
	 
	      // TODO: better job of transforming error for todo consumption
	      this.log(`${operation} failed: ${error.message}`);
	 
	      // Let the app keep running by returning an empty result.
	      return of(result as T);
	    };
	  }
	 
	  /** Log a HeroService message with the MessageService */
	  private log(message: string) {
	    console.log('TodoService: ' + message);
	  }

}