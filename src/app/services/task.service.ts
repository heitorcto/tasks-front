import { Injectable, inject, signal } from '@angular/core';

// Importando Interface da task para que a cahamada de tipo fique mais limpa
import { Task } from '../interfaces/task';

import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Injetando dependências sem necessidade de método construtor
  http = inject(HttpClient); // gerando instância de HTTP
  url = 'http://127.0.0.1:8000/api/tasks';
  setTaskList = signal<Task[] | null>(null);

  // criando observable para receber dados
  public httpTaskList$(): Observable<Task[]> {
    this.setTaskList.set(null);

    return this.http.get<Task[]>(this.url)
      .pipe(
        shareReplay(),
        tap((res) => this.setTaskList.set(res))
      );
  }

  get getTaskList() {
    return this.setTaskList.asReadonly();
  }

  public httpTaskCreate$(title: string, description: string): Observable<Task> {
    return this.http.post<Task>(`${this.url}/create`, {
      title,
      description,
    }).pipe(
      shareReplay()
    )
  }
}
