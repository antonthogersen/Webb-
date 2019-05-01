// Knappar och andra element
const btnDoSomething = document.querySelector('#btnDoSomething');
const txtLorem = document.querySelector('p');


// Event listeners
btnDoSomething.addEventListener('click', alertUser);

function alertUser() {
    // let text = txtLorem.textContent;
    // alert(text) skriver ut text i paragraphen när man klickar på knappen

    // Tar in en text från avnädaren och sprar i newText-vairablen
    let newText = prompt('Jump of a bridge :)')
    txtLorem.textContent = newText; // tilldelar newText till paragrafens textContent

    // Frågar användaren en fråga
    // sparar ett bolleskt värde i greenOrnot
    // baserat på om avnändaren tryckt ok(true) eller avbryt
    let greenOrNot = confirm('You rely want to giv txt gren colår');

    if (greenOrNot === true) {
        txtLorem.style.background = 'red'
        txtLorem.style.fontSize = '50px'
    } else {
        
        txtLorem.className = 'blue'
    }
}


// Formulär :D

const txtName = document.querySelector('#txtName');
const txtAge = document.querySelector('#txtAge');
const txtEmail = document.querySelector('#txtEmail');
const chkPink = document.querySelector('#chkPink');
const rbtnWhite = document.querySelector('#rbtnWhite');
const btnSend = document.querySelector('#btnSend');
const placeholder = document.querySelector('.placeholder');
// Lägg till lyssnare
btnSend.addEventListener('click', createStuff)
// Funktioner

function createStuff() {
    
    let container = document.createElement('div');
    selectBackground(container); // anropa funktion och släng medmed ovanstånde container

    // skapa paragrafer
    let name = document.createElement('p');
    let age = document.createElement('p');
    let email = document.createElement('p');

    // Till dela text i praragrafer från unputs 
    name.textContent = txtName.value
    age.textContent = txtAge.value
    email.textContent = txtEmail.value

    // Tilldela textfärg
    selectTextColor(name, age, email);

    // Lägg in paragraferna i container
    container.appendChild(name);
    container.appendChild(age);
    container.appendChild(email);

    // Släng in containern i placeholder
    placeholder.appendChild(container);
}

function selectBackground(container) {
    // Om checkboxen är markerad
    if(chkPink.checked) {
        container.className = 'pink-bg'
    } else { // annars
        // ge containern klassnamnet default-bg
        container.className = 'default-bg';
    }
}
 
// Funktion som tar in tre paragrafer
// och sätter textfärg baserat på radioknapp
function selectTextColor(name, age, email) {
    if (rbtnWhite.checked) {
        name.style.color = 'white'
        age.style.color = 'white'
        email.style.color = 'white'
    } else {
        name.style.color = 'blue'
        age.style.color = 'blue'
        email.style.color = 'blue'
    }
}