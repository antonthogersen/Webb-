// Deklarera konstanter för knapparna och resultat texten
const alertBtn = document.querySelector('#alert');
const confirmBtn = document.querySelector('#confirm');
const promptBtn = document.querySelector('#prompt')

// Lägg till click-event listeners för knapparna som anropar varsin funktion/metod

alertBtn.addEventListener('click', alertUser);

// Deklarera funktionerna/metoderna här
function alertUser() {
    let alertText = ('Yeet my meat');
    alert(alertText);
}

confirmBtn.addEventListener('click', confirmUser);

function confirmUser() {
    let confirmUser = ('You sure about this')
    confirm(confirmUser)
}

promptBtn.addEventListener('click', promptSay);

function promptSay() {
    let promptSay = ('wat u wana say')
    prompt(promptSay)
}
