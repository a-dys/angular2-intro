import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';
import {TodoList} from './todo-list'

@Component({
    selector: 'my-app',
    directives: [TodoInput, TodoList],
    template: `<h1>
    <todo-input></todo-input>
    <todo-list></todo-list>
    </h1>`
})
class App { }

bootstrap(App,[TodoService]); //any components that I have in my application can use this service
