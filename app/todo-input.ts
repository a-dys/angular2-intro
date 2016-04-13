import {Component} from "angular2/core";

@Component({
    selector: 'todo-input',
    directives: [TodoInput],
    template: '<div>I am in todo-input</div>'
})
export class TodoInput{}