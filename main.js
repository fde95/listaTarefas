const taskInput = document.querySelector(".taskInput input"),
filter = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clearBtn"),
taskBox = document.querySelector(".taskBox");

let editId;
let isEditedTask = false;
//armazenando lista de tarefas no localstorage 
let toDos = JSON.parse(localStorage.getItem("todo-list"));

filter.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showToDo(btn.id);
    });
});

function showToDo(filter){
    let li = "";
    if (toDos) {
        toDos.forEach((toDos, id) => {
            let isCompleted = toDos.status == "completed" ? "checked" : "";
            if (filter == toDos.status || filter == "all"){
                li += `                
                    <li class="task">
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                        <p class="${isCompleted}">${toDos.name}</p>
                    </label>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="taskMenu">
                            <li onclick="editTask(${id}, '${toDos.name}')"><i class="uil uil-pen"></i>
                                Editar
                            </li>
                            <li onclick="deleteTask(${id})"><i class="uil uil-trash-alt"></i>
                                Excluir
                            </li>
                        </ul>
                    </div>
                </li>`;
            }
            
        });
    }
    //se as tarefas estiverem vazias, será exibida a mensagem abaixo
    taskBox.innerHTML = li || `<span>Você não tem tarefas aqui</span>`;
}
showToDo("all")

function showMenu(selectedTask){
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click", e => {
        //removendo o submenu com click
        if (e.target.tagName != "I" || e.target != selectedTask){
            taskMenu.classList.remove("show");
        }
    });
}

function editTask(taskId, taskName) {
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;
}

function deleteTask(deleteId) {
    //removendo todos os itens do array
    toDos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(toDos));
    showToDo("all");
}

clearAll.addEventListener("click", () => {
        //removendo task selecionada do array
        toDos.splice(0, 1);
        localStorage.setItem("todo-list", JSON.stringify(toDos));
        showToDo();
})

function updateStatus(selectedTask){
    //obtendo parágrafo que contém o nome da tarefa
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("checked");
        //atualizando o status da task selecionada como completa
        toDos[selectedTask.id].status = "completed";
    } else{
        taskName.classList.remove("checked");
        //atualizando o status da task selecionada como Pendente
        toDos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(toDos));
}

taskInput.addEventListener ("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if (!isEditedTask) { //se isEditedTask não for verdadeiro
            if (!toDos){//se uma tarefa não existir, passar um array vazio
            toDos = [];
            }

            let taskInfo = {name: userTask, status: "pending"};
            toDos.push(taskInfo); //add nova task em afazeres
        } else{
            isEditedTask = false;
            toDos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(toDos));
        showToDo("all");
    }
})