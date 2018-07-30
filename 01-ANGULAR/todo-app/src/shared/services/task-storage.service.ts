import { Injectable } from '@angular/core';
import {Task} from 'src/shared/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  constructor() { }

  /**
   * Permet de sauvegarder les
   * tâches dans le localstorage.
   * @param {Task[]} tasks
   */
  save(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * retourne une liste de taches depuis
   * le localstorage ou un nouveau
   * tableau si vide
   */
  getTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    return (null !== tasks) ? tasks : [];

  }
}
