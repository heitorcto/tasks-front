import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { TaskService } from './services/task.service';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpdateTaskComponent, FormsModule, ListTasksComponent, CreateTaskComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = signal<string>('');
  description = signal<string>('');

  ngOnInit(): void {
    initFlowbite();
  }
}
