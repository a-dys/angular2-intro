import {Component} from "angular2/core"
import {TodoService} from "./todo-service"
import {TodoItemRenderer} from "./todo-item-renderer"
import {SearchPipe} from "./search-pipe"

@Component({
    selector: 'todo-list',
    pipes: [SearchPipe],
    directives: [TodoItemRenderer],
    template: `<div>
        <ul>
            <li *ngFor="#todo of todoService.todos | search"> <!--'*' this is directive which going to change element itself-->
                <todo-item-renderer [todo]="todo"></todo-item-renderer>
            </li>
        </ul>
    </div>`

})
export class TodoList{
    message = "hello";
    constructor(public todoService:TodoService){}
}