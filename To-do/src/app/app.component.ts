import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos:Todo[]= [
    {id:1,task:"Go shopping",status:'Open'},
    {id:2,task:"Do homework",status:'Open'}
  ];
  // newTask:string;
  
  addTask(newTask:string){
       this.todos.push({id:this.todos.length+1,task:newTask,status:'Open'});   
  }


  doneTask(todo:Todo){
  todo.status = 'Done';
  }

}

export class Todo {
  id:number;
  task:string;
  status:string = 'open';



}
