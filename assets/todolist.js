//-------------------------------------Get date
let nowDate = document.getElementById('date')

let date = new Date()
let week = date.getDay()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let weeks = ['Doming','Segunda - Feira','Terça - Feira','Quarta - Feira','Quinta - Feira','Sexta - Feira','Sábado']
let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

nowDate.innerHTML = `${weeks[week]}, ${day} de ${months[month]} de ${year}`

//-----------------------------------------To do list
let item = document.getElementById('input-addItem')
let time = document.getElementById('timeAdd')
let addItem = document.getElementById('btn-check')
let list = document.getElementById('taskBox')

document.addEventListener('DOMContentLoaded', getTasks)
addItem.addEventListener('click', addTask)

function addTask(e){
    if(item.value === ''){
        alert('Insira uma tarefa')
    } else if (time.value === ''){
        alert('Insira um horário')
    } else {
        let todoTask = document.createElement('li')
        todoTask.innerText = (`${item.value} - ${time.value}`)
        todoTask.classList.add('todoItem')
        list.appendChild(todoTask)

        saveLocalTasks (`${item.value} - ${time.value}`)

        let deleteItem = document.createElement('button')
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
        let todoTask = document.createElement('li')
        todoTask.innerText = todoTasks
        todoTask.classList.add('todoItem')
        list.appendChild(todoTask)

        let deleteItem = document.createElement('button')
        deleteItem.innerHTML = '<img src="./assets/garbage.png" alt="" >'
        deleteItem.classList.add('btn-delItem')
        todoTask.appendChild(deleteItem)
    })
}

