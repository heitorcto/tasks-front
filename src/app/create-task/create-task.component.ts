import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  taskService = inject(TaskService);
  title = signal<string>('');
  description = signal<string>('');

  createTaskService(): void {
    this.taskService.httpTaskCreate$(this.title(), this.description())
      .pipe(concatMap(() => this.taskService.httpTaskList$()))
      .subscribe();

    this.title.set('');
    this.description.set('');
  }
}
