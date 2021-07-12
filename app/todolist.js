//-------------------------------------Get date
let nowDate = document.getElementById('date')

let date = new Date()
let week = date.getDay()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let weeks = ['Domingo','Segunda - Feira','Terça - Feira','Quarta - Feira','Quinta - Feira','Sexta - Feira','Sábado']
let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

nowDate.innerHTML = `${weeks[week]}, ${day} de ${months[month]} de ${year}`

//-----------------------------------------To do list
let item = document.getElementById('input-addItem')
let time = document.getElementById('timeAdd')
let addItem = document.getElementById('btn-check')
let list = document.getElementById('taskBox')

document.addEventListener('DOMContentLoaded', getTasks)
addItem.addEventListener('click', addTask)
document.getElementById('textInput').innerText = localStorage.inputText;
document.documentElement.setAttribute('class',localStorage.getItem('setDarkMode'))
document.getElementById('wrapper-profilePhoto').setAttribute('src', localStorage.getItem('image'))

function creat_id(){
    return Math.random()*999;
}

function addTask(e){
    if(item.value === ''){
        alert('Insira uma tarefa')
    } else if (time.value === ''){
        alert('Insira um horário')
    } else {
        let task_item = {id: creat_id(), content: item.value, time: time.value};   
        let todoTask = document.createElement('li')
        todoTask.setAttribute("teste_id", task_item.id);
        todoTask.innerText = (`${task_item.content} - ${task_item.time}`)
        todoTask.classList.add('todoItem')
        list.appendChild(todoTask)

        saveLocalTasks (task_item)

        let deleteItem = document.createElement('button')
        deleteItem.addEventListener('click', () =>{
            deleteTask(task_item.id)
        })
        deleteItem.innerHTML = '<img src="./assets/garbage.png" alt="">'
        deleteItem.classList.add('btn-delItem')
        todoTask.appendChild(deleteItem)

        item.value = ''
        time.value = ''
    }
}

function saveLocalTasks (todoTasks){
    let todoList;
    if(localStorage.getItem('todos') === null){
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todos'))
    }
    todoList.push(todoTasks)
    localStorage.setItem('todos', JSON.stringify(todoList))
}

function getTasks(){
    let todoList;
    if(localStorage.getItem('todos') === null){
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem('todos'))
    }
    todoList.forEach(function(todoTasks) {
        let todoTask = document.createElement("li");
        todoTask.innerText = `${todoTasks.content} - ${todoTasks.time}`;
        todoTask.setAttribute("teste_id", todoTasks.id);
        todoTask.classList.add('todoItem')
        list.appendChild(todoTask)

        let deleteItem = document.createElement('button')
        deleteItem.addEventListener('click', () =>{
            deleteTask(todoTasks.id)
        })
        deleteItem.innerHTML = '<img src="./assets/garbage.png" alt="">'
        deleteItem.classList.add('btn-delItem')
        todoTask.appendChild(deleteItem)
    })
}

function  deleteTask(id){
    let new_list = []

    let todoList = JSON.parse(localStorage.getItem("todos"));    
    todoList.forEach((task)=>{        
        if(task.id != id){           
            new_list.push(task)        
        }    
    })
    localStorage.setItem("todos", JSON.stringify(new_list));
     
    location.reload()
}