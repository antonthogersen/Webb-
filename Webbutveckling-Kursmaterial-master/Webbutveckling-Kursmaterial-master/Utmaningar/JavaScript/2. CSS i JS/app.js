// Deklarera konstanter för knapparna och resultat texten
const colorBtn = document.querySelector('#color');
const sizeBtn = document.querySelector('#size');
const fontBtn = document.querySelector('#font');    

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod
colorBtn.addEventListener('click', backgroundChange);
sizeBtn.addEventListener('click', sizeChange);
fontBtn.addEventListener('click', fontChange);

// Deklarera funktionerna/metoderna här


function backgroundChange() {
    colorBtn.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

function sizeChange() {
    sizeBtn.style.padding = Math.floor(Math.random() * Math.floor(150)) + 'px';
    sizeBtn.style.fontSize = Math.floor(Math.random() * Math.floor(150)) + 'px';
}

function fontChange() {
    fontBtn.style.fontSize = Math.floor(Math.random() * Math.floor(500)) + 'px';
    console.log(fontBtn.style.fontSize)
}

