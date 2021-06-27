var imgIcon = document.getElementById('updatePic');
var image = document.getElementById('profilePic');
var file = document.getElementById('file')
var btnFile = document.getElementById('btn-file');


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

