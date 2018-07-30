import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage";
import {Task} from "../../Modeles/task";

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {

  constructor(private storage: Storage) {
    console.log('Hello TasksProvider Provider');
  }

  /**
   * Sauvegarde en mémoire les tâches.
   * @param {Task[]} tasks
   */
  save(tasks: Task[]): void {
    this.storage.set('tasks', tasks);
}

  /**
   * Récupère les tâches en mémoire.
   * @returns {Promise<Task[]>}
   */
  get(): Promise<Task[]> {
    return this.storage.get('tasks');
  }

}
