import Task from "./todoModel.js"

export default class ShowTodo {

    constructor() {
        this.instanciaDeModel = new Task();
    }

    showTodo(todos, filter) {
        let liTag = "";
        if(todos) {
            todos.forEach((todo, id) => {
                let completo = todo.status == "completed" ? "checked" : "";
                if(filter == todo.status || filter == "all") {
                    // console.log(todo.name, todo.status, completed, filter)
                    liTag += `<li class="task">
                                <input class="checkbtn" type="checkbox" id="${id}" ${completo}>
                                <span class="${completo}" id="t-${id}">${todo.name}</span>
                                <button class="deletebtn" id="${id}" type='submit'>❌</button>
                            </li>`;
                }
            });
        }
        let taskBox = document.querySelector(".task-box");
        taskBox.innerHTML = liTag || "<span>You don't have any task here</span>";
    }
}
