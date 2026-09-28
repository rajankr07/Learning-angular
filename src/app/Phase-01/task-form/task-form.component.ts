import { Component } from '@angular/core';
import { Task } from '../../models/phase-01-models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent {
  employeeName = '';
  taskTitle = '';
  priority: Task['priority'] = 'Medium';

  addTask() {
    const task: Task = {
      id: Date.now(),
      title: this.taskTitle,
      employeeName: this.employeeName,
      priority: this.priority,
      completed: false,
    };

    console.log(task);
  }
}
