import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from './../types/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TASKS_API_URL = 'http://localhost:4000/tasks';

  constructor(private http: HttpClient) {}
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TASKS_API_URL);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.TASKS_API_URL}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.TASKS_API_URL}/${task.id}`;
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.TASKS_API_URL, task, httpOptions);
  }
}
