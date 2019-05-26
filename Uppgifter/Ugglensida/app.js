const linkMenu = document.querySelector('#menu'); // Tar in elementen
const clickMenu = document.querySelector('#menuButton')

clickMenu.addEventListener('click', function(openMenu){ // Lägger till en eventlistener så man kan ha en click function till knappen
    
    if(linkMenu.style.display === 'none') { // Om den är none så
        linkMenu.style.display = 'block'  // Gör den så det blir block
    } else {
        linkMenu.style.display = 'none' // Stänger av menyn
    }
})