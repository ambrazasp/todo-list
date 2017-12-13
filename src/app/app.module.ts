import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { TasksComponent }       from './tasks/tasks.component';
import { AboutComponent }       from './about/about.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

import { TaskService }          from './task.service';
import { AppRoutingModule }     from './/app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    AboutComponent,
    TaskDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ TaskService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
