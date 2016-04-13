import {bootstrap}    from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todo-input';

@Component({
    selector: 'my-app',
    directives: [TodoInput],
    template: '<h1><todo-input></todo-input></h1>'
})
class App { }

bootstrap(App);
