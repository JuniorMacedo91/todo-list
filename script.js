// Show and hide Upload button
let photo = document.getElementById('photo-container');
let btnchoosePic = document.getElementById('choose-photo')

photo.addEventListener('mouseenter', function(){
    btnchoosePic.style.display='block'
})

photo.addEventListener('mouseleave', function(){
    btnchoosePic.style.display='none'
})

//Upload photo
let picture = document.getElementById('profile-photo')
let file = document.getElementById('btn-addFile')

file.addEventListener('change', function(){
    let pic = this.files[0]

    if (pic){
        let reader = new FileReader();

        reader.addEventListener('load', function(){
            picture.setAttribute('src', reader.result)
        })

        reader.readAsDataURL(pic)
    }
})

//Get date
let nowDate = document.getElementById('date')

let date = new Date()
let week = date.getDay()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

let weeks = ['Doming','Segunda - Feira','Terça - Feira','Quarta - Feira','Quinta - Feira','Sexta - Feira','Sábado']
let months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

nowDate.innerHTML = `${weeks[week]}, ${day} de ${months[month]} de ${year}`

//Dark mode
let darkMode = document.getElementById('btn-darkmode-moon')
let lightMode = document.getElementById('btn-darkmode-sun')
let background = document.body

darkMode.addEventListener('click', function(){
    darkMode.style.display="none";
    lightMode.style.display="block";
    background.style.backgroundColor = "#000011";
})

lightMode.addEventListener('click', function(){
    darkMode.style.display="block"
    lightMode.style.display="none"
    background.style.backgroundColor = "#fff";
})

