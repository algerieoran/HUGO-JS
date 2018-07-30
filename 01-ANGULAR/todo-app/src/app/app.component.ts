import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/models/task';
import * as _ from 'lodash';
import {TaskStorageService} from '../shared/services/task-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Mes tâches à faire !';

  /**
   * creation d'un tableau de tâches
   * il contiendera toutes les tâches
   * de notre application
   * @type {any[]}
   */
  tasks: Task[] = [];

  /**
   * L'utilisateur vient de
   * terminer une tache
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
    this.taskStorageService.save(this.tasks);
  }

  /**
   * L'utilisateur vient de supprimer
   * une tâche. On la retire du tableau.
   * @param {Task} task
   */
  removeTask(task: Task) {
    _.pullAllWith(this.tasks, [task], _.isEqual);
  }

  /**
   * Cette fonction se déclanche dans
   * l'application lorsqu'une nouvelle
   * tâche est créee par l'utilisateur
   * dans le composant app-add-task.
   * @param (task) task
   */
  newTask(task: Task) {
    this.tasks.push(task);
  }
constructor(private taskStorageService: TaskStorageService) {}
  ngOnInit(): void {
    /**
     * Au chargement de l'application,
     * je récuper mes tâches dans le localStorage.
     */
    this.tasks = this.taskStorageService.getTasks();
  }
}
