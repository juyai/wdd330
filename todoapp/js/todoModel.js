//a class that can create new instances of an object
//Each new list item that is created will be an instance of the Task class.


'use strict'

const form = document.forms[0];

class Task {
    constructor() {
        // this.name = name;
        this.todos = JSON.parse(localStorage.getItem("todo-list"));
    }

    // getAllTask() {
    //     return this.todos;
    // }

    addTask() {
        const formButton = document.querySelector("#input button");
        let userTask = document.querySelector("#input input").value;

        formButton.addEventListener("click", (e) => {
            if(userTask) {
                if(!this.todos) {
                    todos = [];
                }
                userTask.value = "";
                let taskInfo = {name: userTask, status: "pending"};
                this.todos.push(taskInfo);
                localStorage.setItem("todo-list", JSON.stringify(this.todos));
            }
        })
    }

}

