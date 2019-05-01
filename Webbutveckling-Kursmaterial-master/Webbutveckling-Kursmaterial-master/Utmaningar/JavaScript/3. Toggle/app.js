// Deklarera konstanter för knapparna och resultat texten
const secretBtn = document.querySelector('#toggle')
const secretMsg = document.querySelector('#message')
// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
secretBtn.addEventListener('click', hideShow)
// Deklarera allt annat här

function hideShow() {
    if(secretMsg.style.display === 'block') {
        secretMsg.style.display = 'none';
    } else {
        secretMsg.style.display = 'block'
    }
    
    
}
