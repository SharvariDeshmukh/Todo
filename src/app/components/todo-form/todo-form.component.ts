import { Component, OnInit } from '@angular/core';

import {v4 as uuidv4} from "uuid";
import {Todo} from "../../model/Todo";
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle : string;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  handleAdd(){
    const newTodo : Todo={
      id : uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date : new Date()
    };
    if(this.todoTitle){
      this.todoService.addTodo(newTodo);
    }else{
      
    }
    
    this.todoTitle="";
  }

}
