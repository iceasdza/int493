export class Todo {
	id: number ;
	task: string ;
	status: string ;
}

var todos: Todo[] = [ 
	{id:1,task:'task 1',status:'open'},
	{id:2,task:'task 2',status:'open'}] ;

	console.log('todos.length='+todos.length);
	console.log('todo[1].task='+todos[0].task) ;

	for(var i=0; i<todos.length;i++){
		console.log(todos[i].task); 
	}

	console.log(todos.map( a=> a.task)) ;
