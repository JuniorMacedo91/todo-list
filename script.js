let imgIcon = document.getElementById('updatePic');
let image = document.getElementById('profilePic');
let file = document.getElementById('file')
let btnFile = document.getElementById('btn-file');
let nome = document.getElementById('textName')
let resultado = document.getElementById('nome')
let enter = document.getElementById('btn-enter')


//Show file button
imgIcon.addEventListener('mouseenter', function () {
    btnFile.style.display = 'inline'
})

//Hide file button
imgIcon.addEventListener('mouseleave', function () {
    btnFile.style.display = 'none'
})

//Upload photo
file.addEventListener('change', function(){
    let photo = this.files[0]

    if(photo){
         let showPic = new FileReader()

         showPic.addEventListener('load', function(){
            image.setAttribute('src', showPic.result)
         })
         
         showPic.readAsDataURL(photo)
    }
})

//Get Datetime

let daytime = new Date()
let weekDay = daytime.getDay()
let day = daytime.getDate()
let month = daytime.getMonth()
let year = daytime.getFullYear()

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

let week = ['Domingo', 'Segunda - Feira', 'Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sábado']

document.getElementById('date').innerHTML = `${week[weekDay]} , ${day} de ${months[month]} de ${year}`

