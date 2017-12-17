import { Component, OnInit }  from '@angular/core';
import { Task }               from '../task';
import { TaskService }        from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  selectedTask: Task;
  isNew: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  selectedTaskNew(): void {
    this.selectedTask = new Task();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
}
