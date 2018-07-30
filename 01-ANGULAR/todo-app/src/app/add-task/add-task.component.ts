import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  /**
   * La tâche à créer.
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Permet d'emettre un événement
   * lors de la création d'une tâche.
   * @type {EventEmitter}
   */
  @Output() newTaskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée lors de la création d'une tâche.
   */

  addTask() {
    /**
     * Lorsque l'utilisateur soumet le formulaire,
     * j'émet un événement avec la nouvelle tâche.
     */
    this.newTaskEvent.emit(this.task);

    /**
     * Réinitialisation de la tâche @type (Task)
     */
    this.task = new Task();
  }
}
