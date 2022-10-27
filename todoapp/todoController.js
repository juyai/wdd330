import Task from "./todoModel.js"
import ShowTodo from "./todoView.js";

const instanciaDeView = new ShowTodo();
const instanciaDeModel = new Task();
const filters = document.querySelectorAll(".filters span");

filters.forEach(btn => {
    btn.addEventListener("click", e => {
        document.querySelector('span.active').classList.remove('active');
        btn.classList.add("active");
        instanciaDeView.showTodo(instanciaDeModel.todos, btn.id);
    });
});

instanciaDeView.showTodo(instanciaDeModel.todos, "all");

// -------------------------------------------------------------------------
const formButton = document.querySelector("#wrapper button");

formButton.addEventListener("click", (e) => {
    // e.preventDefault();
    instanciaDeModel.addTask();
})

const deletebtn = document.querySelectorAll('.deletebtn');
deletebtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const id = e.target.id;
        //console.log(id);
        let todos = instanciaDeModel.todos;
        //console.log(todos);
        const list = e.target.parentElement;
        const span = list.querySelector('span');
        const text = span.textContent;
        span.innerHTML = `<del>${text}</del>`;
        
        let readyToDelete = todos.splice(id,1);
        //console.log(readyToDelete);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        location.reload();
    })
})

const checkbtn = document.querySelectorAll('.checkbtn');
checkbtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const selected = e.target;
        selected.classList.toggle('checked');

        const list = e.target.parentElement;
        const span = list.querySelector('span');
        //span.classList.toggle('checked');

        let todos = instanciaDeModel.todos;
        if(selected.checked) {
            //selected.classList.toggle('checked');
            span.classList.add("done");
            todos[selected.id].status = "completed"; 
        } else {
            span.classList.remove("done");
            todos[selected.id].status = "pending"; 
        }
        localStorage.setItem("todo-list", JSON.stringify(todos));
    })    
})    