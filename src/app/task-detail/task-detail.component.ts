import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';

import { TasksComponent }  from '../tasks/tasks.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;
  @Input() isNew: boolean = false;

  constructor(
    private tasksComponent: TasksComponent
  ) { }

  ngOnInit() { }

  delete(task: Task): void {
    this.tasksComponent.tasks = this.tasksComponent.tasks.filter(obj => obj !== task);
  }

  add(task: Task): void {
    this.tasksComponent.tasks.push(task);
  }
}
