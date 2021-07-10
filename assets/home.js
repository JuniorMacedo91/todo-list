//---------------------------- Show and hide Upload button
let photo = document.getElementById('photo-wrapper');
let btnchoosePic = document.getElementById('choose-photo')

photo.addEventListener('mouseenter', function(){
    btnchoosePic.style.display='block'
})

photo.addEventListener('mouseleave', function(){
    btnchoosePic.style.display='none'
})

//---------------------------------Upload photo
let picture = document.getElementById('profile-photo')
let file = document.getElementById('btn-addFile')
let photoCopy = document.getElementById('wrapper-profilePhoto')

file.addEventListener('change', function(){
    let profifePic = this.files[0]

    if (profifePic){
        let reader = new FileReader();

        reader.addEventListener('load', function(){
            picture.setAttribute('src', reader.result)
            localStorage.setItem('image', reader.result)
        })
        reader.readAsDataURL(profifePic)
    }
 })

document.addEventListener('DOMContentLoaded', setPhoto);

function setPhoto(){
    let newImage = localStorage.getItem('image')
    if(newImage){
        document.getElementById('profile-photo').setAttribute('src', newImage)
    } 
}

//Get name
function getName(){
    let name = document.getElementById('name-input').value
    localStorage.setItem('inputText', name)
}

//---------------------------------------DarkMode
const setDarkMode = localStorage.setDarkMode
const btnDarkMode = document.getElementById('btnDarkMode');

btnDarkMode.addEventListener('click', () => {
    document.documentElement.classList.toggle('btnDarkMode')
})

if(setDarkMode){
    document.documentElement.classList.add('dark')
    btnDarkMode.checked = true
}

btnDarkMode.addEventListener('click', () =>{
    document.documentElement.classList.toggle('dark')

    if(document.documentElement.classList.contains('dark')){
        localStorage.setItem('setDarkMode', true)
        return
    }
    localStorage.removeItem('setDarkMode')
})