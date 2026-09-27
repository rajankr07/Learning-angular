import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-task-counter',
  imports: [],
  templateUrl: './task-counter.html',
  styleUrl: './task-counter.css',
})
export class TaskCounter {

  taskCount = signal(0);

  completedCount = signal(0);

  pendingCount = computed(() => {
    return this.taskCount() - this.completedCount();
  });

  addTask() {
    this.taskCount.update((count) => count + 1);
  }

  completeTask() {
    if (this.completedCount() < this.taskCount()) {
      this.completedCount.update((count) => count + 1);
    }
  }

  resetTasks() {
    this.taskCount.set(0);
  }

  constructor() {
    effect(() => {
      console.log(`Total: ${this.taskCount()}, Completed: ${this.completedCount()}`);
    });
  }
}
