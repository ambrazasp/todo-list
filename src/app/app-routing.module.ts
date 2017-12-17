import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent }       from './tasks/tasks.component';
import { AboutComponent }       from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
