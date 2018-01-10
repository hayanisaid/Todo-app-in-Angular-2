import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']

})
export class TodosComponent implements OnInit {
   todos;
   text;
  constructor(private _todoservice:TodoService) { }

  ngOnInit() {
  	

  	this.todos=this._todoservice.getTodo();
  	
  }
  addSome(){
  	var newTodo={
  	text:this.text	
  	}
     this.todos.push(newTodo);
     this._todoservice.addSome(newTodo);
  	}
   deleteTodo(todo){
   	for(let i=0; i< this.todos.length;i++){
   		if(this.todos[i].text==todo){
           this.todos.splice(i,1)
   		}
   	}

   	this._todoservice.deleteTodo(todo);
   }

}
