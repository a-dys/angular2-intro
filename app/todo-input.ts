import {Component} from "angular2/core";
import {TodoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    directives: [TodoInput],
    template: `<div>
    <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="todoModel">
    </form>
    </div>`
})
export class TodoInput{
    todoModel;
    //Injecting
    constructor(public todoService:TodoService){ //'public' to make todoService accesible in onCLick
    }

    onSubmit(value){
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService.todos);
    }
}