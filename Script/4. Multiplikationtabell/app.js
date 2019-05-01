// Hämta komponenter
const numberInput = document.querySelector('#number');
const btnNumber = document.querySelector('#btnNumber');
const container = document.querySelector('#container');
const btnClear = document.querySelector('#clearNumber')
// Lägg till händelse-lyssnare
// Functionen går endast att använda i för denna knap eftersom den ligger i dens parants
btnNumber.addEventListener('click', function() {
    // Ta bort alla paragrafer om de finns
    removeParagraphs()

    // Hämta inmatad numeriskt värde 
    let number = numberInput.value;
    
    // Loopa 10 gånger
    for (let i = 1; i < 11; i++) {
        createParagraph(number * i)
    } 
    
});

// Egna funktioner

//
function createParagraph(number) {
    let p = document.createElement('p'); // Skapa en ny paragraph
    p.textContent = number; // Gör ett nummer som ska stå i P
    container.appendChild(p); // Lägger ett object i parenten, just nu läggs P i container
}


// 
function removeParagraphs() {
    // Hämta all paragrafer och ta bort dem
    let pArray = document.querySelectorAll('p')
    for (let i = 0; i < pArray.length; i++) {
        // pArray[i]
        container.removeChild(pArray[i]);
    }
}














    // let myArray = ['Katt', 'Hund', 10, true];
    
    // for(let i = 0; i < myArray.length; i++) {
    //     console.log(myArray[i]);
    // }