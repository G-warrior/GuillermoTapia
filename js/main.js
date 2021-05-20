//navbar
const iconToggle = document.querySelector('.barraMenu_toggleMenu');
const sidebar = document.querySelector('.sideMenu')
iconToggle.addEventListener('click',()=>{
    iconToggle.classList.toggle('activo');
    sidebar.classList.toggle('active');
    /*if(document.querySelector('.activo')){
        iconToggle.classList.toggle('activo')
    }*/
})

//Sombra del navbar
const barraMenu = document.querySelector('.barraMenu')
window.addEventListener('scroll',()=>{
    if(window.scrollY > 10){
        barraMenu.classList.add('sombraMenu')

    }else{
        barraMenu.classList.remove('sombraMenu')
    }
})
