import { Injectable } from '@angular/core';
import {init} from './init-todos';

@Injectable() 
export class TodoService extends init{
  
  constructor() { 
  	super();
  console.log("todo service init");
  this.load();
}


getTodo(){
	var todos=JSON.parse(localStorage.getItem('todos'));

	return todos;

}

addSome(newTodo){
	var todo= JSON.parse(localStorage.getItem('todos'));
	 todo.push(newTodo);
	 localStorage.setItem('todos',JSON.stringify(todo));
}
 deleteTodo(todo){
 	var todos= JSON.parse(localStorage.getItem('todos'));
   	for(let i=0; i< todos.length;i++){
   		if(todos[i].text===todo){
           todos.splice(i,1)
   		}
   	}
   	localStorage.setItem('todos',JSON.stringify(todo));
   }
}
