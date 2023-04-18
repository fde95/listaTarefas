<h1 align="center">
  <p align="center">Lista de Tarefas - <a href="https://fde-lista-tarefas.vercel.app/">justDo!</a></p>
 <img src="https://media.giphy.com/media/J9UXcyVW6OYN2fH0Sr/giphy.gif" alt="pessoa batendo palma e dizendo vamos praticar, em inglês">
</h1>
<div style="display: inline_block"><br>
  <div align="center">
  <img align="center" alt="fde95-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="fde95-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="fde95-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
</div>

<h3> Sobre o Projeto </h3>
No 9º módulo do curso de Engenheiro Front-End oferecido pela EBAC, tivemos como desafio para conclusão do módulo, a elaboração de uma lista de tarefas utilizando o aprendizado do módulo em jQuery (<a href="https://github.com/fde95/curso-ebac-frontend/tree/exercicio_jquery">ver exercício</a>).
Como desafio pessoa, elaborei um novo modelo, onde podemos navegar pelas tarefas "Concluidas", "Pendentes" e "Geral". Também é possível, clicando no menu lateral de cada tarefa, excluí-la ou editá-la individualmente e também adicionei um novo botão ("Esvaziar") para apagar todas as tarefas.
Com o JavaScript, adicionei um array para armazenamento na memória interna da maquina de cada usuário para que assim, as tarefas não sejam perdidas e possam ser acessadas a qualquer momento. Para finalizar, disponibilizei a página através do Vercel.

<br><h3>Acesse aqui: <a href="https://fde-lista-tarefas.vercel.app/">justDo!</a>.</h3>

<br>
<h3>Pré-visualização</h3>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232887953-2c3abc5b-d266-4f9a-ba84-cbd3d8ac3dc7.png">


<h4>Adicionando Tarefas</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232888229-016df291-fafa-474a-845f-35e51c69a3fa.png">


<h4>Tarefa "2 Nova Tarefa" -> Sessão de Concluídos</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232888506-6621ff6f-1dd4-43e1-a725-49dff4adc7de.png">


<h4>Tarefas "1 Nova Tarefa" e "3 Nova Tarefa" - > Sessão de Pendentes</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232888900-de7b5b4e-5a51-43b3-a65f-edb6604dcd2a.png">


<h4>Menu Lateral - Editar || Apagar</h4>
<img width="600" src="https://user-images.githubusercontent.com/123211425/232889083-d1bb4a94-046d-4bd0-b1fe-12ba4db8cfe6.png">


<br></br>

<h3>Contatos</h3>
<div style="display: inline_block">
 <a href="https://instagram.com/fde.95" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 <a href = "mailto:fdespinoza95@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 <a href="https://www.linkedin.com/in/fde95" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>

<br></br>

<h3>Código Completo</h3>

<h4>HTML</h4>

```xml
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" sizes="32x32" href="./image/favicon-32x32.png"> <!--Importação de Favicon-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;400;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
        <link rel="stylesheet" href="./main.css">
        <title>justDo!</title>
    </head>
    <body>
        <div class="container">
        <header>
            <h1>justDo!</h1>
        </header>
            <div class="taskInput">
                <img src="./image/list.png" alt="list icon">
                <input type="text" placeholder="Add nova tarefa" title="Pressione Enter para adicionar a tarefa"/>
            </div>
            <div class="controls">
                <div class="filters">
                    <span id="all" class="active">
                        Geral
                    </span>
                    <span id="completed" class="active">
                        Concluidos
                    </span>
                    <span id="pending" class="active">
                        Pendentes
                    </span>
                </div>
                <button class="clearBtn">Esvaziar</button> <!--Botão para apagar todas as tarefas-->
            </div>
            <ul class="taskBox"></ul> <!--Acionamento de Lista de Afazeres-->
        </div>
        <footer>
            &copy; Criado e Desenvolvido por - <b><a href="https://linktr.ee/fde95">Felipe Espinoza</a></b> - 2023
        </footer>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script> <!--jQuery-->
        <script src="./main.js"></script>
    </body>
</html>
```


<h4>CSS</h4>

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
}

body{
    background-color:#013327;

}

.container{
    max-width: 405px;
    margin: 135px auto;
    background-color: #d4d8dc;
    border-radius: 7px;
    padding: 28px 0;
    box-shadow: 30px 30px 30px rgb(0, 0, 0,0.30);
}

h1{
    text-align: center;
    margin-bottom: 30px;
    color: #013327;
    font-size: 80px;
}

.taskInput{
    height: 52px;
    padding: 0 25px;
    position: relative;
}

.taskInput img{
    width: 30px;
    position: absolute;
    top: 50%;
    transform: translate(10px, -50%);
    opacity: 20%;
}

.taskInput input{
    height: 100%;
    width: 100%;
    border-radius: 4px;
    padding: 0 20px 0 53px;
    font-size: 18px;
    border: 2px solid #999;
    outline: none;
}

.taskInput input::placeholder{
    color: #bfbfbf;
}

.controls, li{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.controls{
    padding: 18px 25px;
    border-bottom: 2px solid #bfbdbd;
}

.filters span{
    cursor: pointer;
    margin: 0 8px;
    font-size: 16px;
}

.filters span:first-child{
    margin-left: 0;
}

.filters span.active{
    color: #038060;
}

.controls .clearBtn{
    font-size: 16px;
    cursor: pointer;
    outline: none;
    border: none;
    padding: 3px 16px;
    border-radius: 7px;
    background-color: #802003;
    color: #fff;
}

.controls .clearBtn:hover{
    background-color:#330D01;
}

.taskBox{
    margin: 20px 25px;
}

.taskBox .task{
    list-style: none;
    font-size: 17px;
    margin-bottom: 18px;
    padding-bottom: 16px ;
    border-bottom: 1px solid #bfbdbd;
}

.taskBox .task:last-child{
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
}

.task label{
    display: flex;
}

.task label p.checked{
    text-decoration: line-through;
    color: #b7b7b7;
}

.task label input{
    margin-right: 12px;
}

.task .settings{
    cursor: pointer;
    position: relative;
}

.settings .taskMenu{
    position: absolute;
    background: #fff;
    padding: 5px 0;
    right: 2px;
    bottom: -66px;
    z-index: 2;
    transform: scale(0);
    transform-origin: top right;
    transition: transform 0.3s ease;
    box-shadow: 0 0 6px rgba(0,0,0,0.30);
    border-radius: 16px 0px 16px 16px;
}

.settings .taskMenu.show{
    transform: scale(1);
}

.taskMenu li{
    height: 25px;
    font-size: 14px;
    padding: 17px 17px;
    margin-bottom: 2px;
    justify-content: flex-start;
}

.taskMenu li:last-child{
    margin-bottom: 0;
}

.taskMenu li:hover{
    background-color: #e3e3e3;
    border-radius: 15px;
}

.taskMenu li i{
    padding-right: 8px;
}

footer{
    margin-top: 190px;
    text-align: center;
    color: #e3e3e3;
}

footer a{
    text-decoration: none;
    color: #b7b7b7;
}

footer a:hover{
    color: #e3e3e3;
}
```


<h4>JavaScript</h4>

```js
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
```
