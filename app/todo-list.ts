import {Component, Input} from "angular2/core"
import {TodoService} from "./todo-service"
import {TodoItemRenderer} from "./todo-item-renderer"
import {StartedPipe} from "./started-pipe"
import {SearchPipe} from "./search-pipe"

@Component({
    selector: 'todo-list',
    pipes: [StartedPipe, SearchPipe],
    directives: [TodoItemRenderer],
    template: `<div>
        <ul>
            <!--'*' this is directive which going to change element itself-->
            <li *ngFor="#todo of todoService.todos
            | started : status
            | search: term
            ">
                <todo-item-renderer
                [todo]="todo"
                (toggle)="todoService.toggleTodo($event)"
                ></todo-item-renderer>
            </li>
        </ul>
    </div>`

})
export class TodoList{
    @Input() status;
    @Input() term;
    constructor(public todoService:TodoService){}
}