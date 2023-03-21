let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');
let section = document.querySelectorAll('section')
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
for (let i = 0; i < section.length; i++) {
    section[i].onclick =function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
}
// Lướt chuột tắt menu
// cách 1
window.addEventListener('scroll',function(){
    if(window.pageYOffset >= 50)
    {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }  
})
// cách 2
window.onscroll = () =>{
    if(window.pageYOffset >= 50)
    {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }  
}


//lướt chuột hiện ra dấu mũi tên lên
$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.scroll_top').addClass('active_scroll_top');
    }
    else{
        $('.scroll_top').removeClass('active_scroll_top');
    }    
});

