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
        document.getElementById('wrapper-profilePhoto').setAttribute('src', newImage)
    } 
}


//Get name
function getName(){
    let name = document.getElementById('name-input').value
    localStorage.setItem('inputText', name)
}

//---------------------------------------DarkMode
const btnDarkMode = document.getElementById('btnDarkMode')
const body = document.querySelector('body')

const darkMode = () =>{
    body.classList.toggle('dark')
}

btnDarkMode.addEventListener('click', () =>{
    let setDark = localStorage.getItem('dark')

    if(setDark !== 'on'){
        darkMode();
        setDark = localStorage.setItem('dark', 'on')
    } else {
        darkMode()
        setDark = localStorage.setItem('dark', null)
    }
});

let setDark = localStorage.dark;
if(setDark === 'on'){
    darkMode()
}
