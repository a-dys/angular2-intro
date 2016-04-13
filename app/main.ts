import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';
import {TodoService} from './todo-service';

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: '<h1><todo-input></todo-input></h1>'
})
class App { }

bootstrap(App,[TodoService]); //any components that I have in my application can use this service
