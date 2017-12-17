import { Injectable }               from '@angular/core';
import { Http, Response, Headers }  from '@angular/http';

import { Observable }               from 'rxjs/Observable';
import { of }                       from 'rxjs/observable/of';
import { catchError, map, tap }     from 'rxjs/operators';
import 'rxjs/add/operator/map'

import { Task }                     from './task';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  private tasksUrl = 'assets/data.json/';

  constructor(
    private http: Http
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksUrl)
      .map((response: Response) => {
        return response.json();
      });
  }
}
