import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Task} from "../../Modeles/task";
import {TasksProvider} from "../../providers/tasks/tasks";
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
              public tasksProvider: TasksProvider) {

  }

  /**
   * Creation d'une tâche
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Affichage du Champ Input
   * @type {boolean}
   */
  active: boolean = true;

  /**
   * Gestion des dates @type {Date}
   */
  date: Date = new Date();


  /**
   * Liste des tâches
   * @type {Task[]}
   */

  tasks: Task[] = [
    {
      id: 1,
      title: 'promener le chien',
      status: false,
    },
    {
      id: 2,
      title: 'Arroser les olantes',
      status: true,
    },
    {
      id: 3,
      title: 'Sortir les poubelles',
      status: false,
    },
    {
      id: 4,
      title: 'Faire la vaiselle',
      status: true,
    }
  ];

  /**
   * Declenche l'enregistrement d'une nouvelle tâche
   */
      saveTask() {
    /**
     * si l'utilisateur a bien définie 'saisi
     * un titre, j'ajoute la tâche.
     * @type {number}
     */
      if (undefined!== this.task.title) {

    //Attribustion d'un id :
    this.task.id = Date.now();

    //on ajoute la tâche dans le tableau
    this.tasks.push(this.task);

        /**
         * Je sauvegarde en mémoire
         */
        this.tasksProvider.save(this.tasks);

    }

  //  on réinitialise les données :
    this.task = new Task();
      this.active = false;
      setTimeout(() => this.active = true, 0);
  }

  /**
   * Quand l'utilisateur appuie sur
   * Entrée, on déclanche l'enregistrement.
   */
  checkKey(key:any) {
    if(key === "Enter") {
      this.saveTask();
    }
  }

  ngOnInit(): void {// cette fonction demare au démarage de l'application
    /**
     * Au chargement de mon application,
     * je récupère les données en mémoire.
     */
    this.tasksProvider.get().then(
      tasks => {
        if(null !== tasks){
        this.tasks = tasks;
        }
      }
    )
  }

  //Sauvegarde en mémoire les tâches.
  saveOurTasks() {
    this.tasksProvider.save(this.tasks);
  }

  /**
   * Suppression d'une tâche.
   * @param {Task} task
   */
  deleteTask(task: Task) {
      _.pullAllWith(this.tasks, [task], _.isEqual);
      this.saveOurTasks();
  }
}
