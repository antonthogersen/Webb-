const linkMenu = document.querySelector('#menu');
const clickMenu = document.querySelector('#mobileNavbar')

clickMenu.addEventListener('click', function(openMenu){
    
    if(linkMenu.style.display === 'none') {
        linkMenu.style.display = 'block'
    } else {
        linkMenu.style.display = 'none'
    }
})