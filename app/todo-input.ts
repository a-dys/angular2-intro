import {Component} from "angular2/core";
import {TodoService} from "./todo-service";
import {TodoModel} from "./todo-model"

@Component({
    selector: 'todo-input',
    directives: [TodoInput],
    template: `<div>
    <form (submit)="onSubmit()">
    <input type="text" [(ngModel)]="todoModel.title">
    </form>
    </div>`
})
export class TodoInput{
    todoModel:TodoModel = new TodoModel;
    //Injecting
    constructor(public todoService:TodoService){ //'public' to make todoService accesible in onCLick
    }

    onSubmit(value){
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel();
    }
}