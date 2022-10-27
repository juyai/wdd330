//a class that can create new instances of an object
//Each new list item that is created will be an instance of the Task class.
'use strict'

export default class Task {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem("todo-list"));
    }

    addTask() {
        let userTask = document.querySelector("#wrapper input").value;

        if(userTask) {
            if(!this.todos) {
                this.todos = [];
            }
            let taskInfo = {name: userTask, status: "pending"};
            this.todos.push(taskInfo);
            localStorage.setItem("todo-list", JSON.stringify(this.todos));
        }
    }
}