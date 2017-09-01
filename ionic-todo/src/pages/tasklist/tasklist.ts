import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html'
})
export class TaskListPage {
tasks: Array<any> = [ ] ;
  constructor(public navCtrl: NavController) {
    this.tasks  = [
      {title: 'Milk', status: 'open'},
      {title: 'Egg', status: 'open'},
      {title: 'Syrup', status: 'open'},
      {title: 'Pancake Mix', status: 'open'}
      ] ;
  }

  addTask(): void {
  let newTask: string = prompt("New Task") ;
  if (newTask != '' && newTask != null
  ) {
  this.tasks.push({title: newTask, status: 'open'}) ;
  }
    }
    markDone(task: any): void {
      task.status = "done" ;
        }
        removeTask(task: any){
      task.status = "removed" ;
      let index = this.tasks.indexOf(task) ;
      if (index > -1){
      this.tasks.splice(index,1) ;
      }
        }
}
