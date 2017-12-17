import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { TasksComponent }       from './tasks/tasks.component';
import { AboutComponent }       from './about/about.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

import { TaskService }          from './task.service';
import { AppRoutingModule }     from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AboutComponent,
    TaskDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
