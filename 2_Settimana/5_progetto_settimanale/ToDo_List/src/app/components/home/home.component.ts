import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { User } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];
  users: User[] = [];
  combinedItems: (Todo | User)[] = [];

  constructor (private srvToDo:TodoService, private srvUser: UserService) {}
  ngOnInit(): void {
    this.addToDoList();
    this.addUser();
  }

  async addToDoList() {
    try {
      this.todos = await this.srvToDo.getTodos();
    }catch (error) {
      console.error('Error fetching ToDoList:', error);
    }
  }

  async addUser() {
    try {
      this.users = await this.srvUser.getUsers();
    }catch (error) {
      console.error('Error fetching User:', error);
    }
  }

  getName(id:number) {
    let name = ''
    this.users.forEach((value) => {
      if(value.id === id) {
        name = `${value.firstName} ${value.lastName}`
      }
    })
    return name;
  }
}

  

