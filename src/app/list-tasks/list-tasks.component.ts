import { Component, OnInit, inject, signal } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [],
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent implements OnInit {
  taskService = inject(TaskService);
  getTaskList = this.taskService.getTaskList;

  ngOnInit(): void {
    this.taskService.httpTaskList$().subscribe();
  }
}
