import {Component} from "angular2/core";
import {TodoService} from "./todo-service";

@Component({
    selector: 'todo-input',
    directives: [TodoInput],
    template: `<div>
    <input type="text" #myInput>
    <button (mouseover)="onClick(myInput.value)">Click me</button>
    </div>`
})
export class TodoInput{
    //Injecting
    constructor(public todoService:TodoService){ //'public' to make todoService accesible in onCLick
    }

    onClick(value){
        this.todoService.todos.push(value);
        console.log(this.todoService.todos);
    }
}