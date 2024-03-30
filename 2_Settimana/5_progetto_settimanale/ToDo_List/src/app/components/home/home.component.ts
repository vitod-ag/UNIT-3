import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo.interface';
import { User } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    todos: Todo[] = [];
    users: User[] = [];
    combinedItems: (Todo & { assignedTo: string })[] = [];

    constructor(private srvToDo: TodoService, private srvUser: UserService) {}

    ngOnInit(): void {
        this.getData();
    }

    async getData() {
        try {
            this.todos = await this.srvToDo.getTodos();
            this.users = await this.srvUser.getUsers();

            this.combinedItems = this.todos.map((todo) => {
                const assignedTo = this.getName(todo.userId);
                return { ...todo, assignedTo };
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    getName(id: number): string {
        const user = this.users.find((user) => user.id === id);
        return user ? `${user.firstName} ${user.lastName}` : '';
    }

    toggleCompleted(todo: Todo & { assignedTo: string }) {
        todo.completed = !todo.completed;
    }
}
