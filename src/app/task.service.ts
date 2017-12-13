import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Http, Response, Headers }           from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import { of }                       from 'rxjs/observable/of';
import { catchError, map, tap }     from 'rxjs/operators';
import 'rxjs/add/operator/map'

import { Task }                     from './task';
import { MessageService }           from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptions2 = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  private tasksUrl = 'api/tasks';
  private tasksUrl2 = 'assets/data.json/';

  constructor(
    private http: HttpClient,
    private http2: Http,
    private messageService: MessageService
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http2.get(this.tasksUrl2)
      .map((response: Response) => {
        return response.json();
      });
  }

  getTask(id: number): Observable<Task>{

    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  addTask (task: Task): Observable<Task> {
    console.log(
      this.http2.post(this.tasksUrl2, JSON.stringify(task), httpOptions2)
        .map((response: Response) => response.json())
        .subscribe((response: Task) => console.log(response))
    );
    return this.getTasks()[0];
  }

  deleteTask (task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  updateTask (task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions).pipe(
      tap(_ => this.log(`updated task id=${task.id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('TaskService: ' + message);
  }
}
