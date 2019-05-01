// console.log('Hej Värld!');
// console.log(150)

// variebeltyp, variabelnamn, tilldelning(=), värde, semikolon
//var firstNumber = 10;
//let secondNumber = 5;
//const thirdNumber = 20;
//secondNumber = firstNumber * thirdNumber;
//console.log(secondNumber);

//firstNumber = 'tio'; //vi kan tilldela en sträng eller vad som helst
//secondNumber = firstNumber * thirdNumber; //Går ej att multiplicera text

//console.log(secondNumber);




//datatyper
//deklarera en variabel
//let test;
//test = 'Sträng'; // Sträng är en samling bokstäver
//test = 100; //numeriskt värde, integer(heltal)
//test = 3.14; //Numeriskt värde, Float(flyttal)
//test = true; //Booleskt värde, True/false, sant/falskt, 1/0
//test = ['Ett', 2, false]; //Array(samling), innehåller flera värden

//console.log(test);




// < : mindre än
// > : större än
// <= : mindre eller lika med
// >= : större eller lika med
// === : like med
// ! : INTE
// !== : INTE lika med 
// let number = 50;

// if (number > 100) {
//     console.log('Succes!');
// } else if(number === 500) {
//     console.log(number / 2 + 50);
// } else {
//     console.log('Failed!')
// }

// && : OCH
// || : ELLER
// ! : INTE (NOT)

// let tal = 25;

// Kollar om tal är mellan 1-10
// if (tal > 0 && tal <= 10) {
//     console.log('Succes')
// } else {
//     console.log('Fail!')
// }

// if (tal === 20 || tal === 25) {
//     console.log('Succ')
// }

// let tal = 50;

// if ((tal > 0 && tal < 11) || (tal > 49 && tal < 61)) {
//     console.log('funke')
// }


// let tal = 3;

// switch (tal) {
//     case 1:
//         console.log('Talet är 1!');
//         break;

//     case 2:
//         console.log('talet är 2!');
//         break;

//     case 3:
//         console.log('talet är 3!');
//         break;
// }


// Whilelooopen används för att repetera kod
// Tills villkkoret inuti parentesen är falskt 
// let tal = 0;
// while (tal < 10) {
//     console.log('Hi!')
//     tal++;
//     // tal += 1;
//     // tal = tal + 1;
// }



// let userInput = 16.54; // X Gångertabell

// 1. let i = 1(skapada räknare
// 2. i < 11 (är i lägre än 11?)
// 3. Kör koden inuti kodblocket
// 4. i++ (inkrementera i med 1)
// 2. 
// 3. 
// 4. 
// ....

// for (let i = 1; i < 11; i++) {
//     let sum = i * userInput;
//     console.log(userInput + ' * ' + i + ' = ' + sum)
// }



// Funktioner

// Nyckelordet function, namn, ( ) parameterlista, kodblock
function printMyName() {
    console.log('Hi my name jeff')
}

printMyName(); //Funktionanrop



function printMultiplicationTable(userInput) {
    for (let i = 1; i < 11; i++){
        let sum = i * userInput;
        console.log(userInput + ' * ' + i + ' = ' + sum)
    }
}
printMultiplicationTable(7);

// En metod som returnerar en summa av tre tal
function addThreeNumbers(first, second, third) {
    let sum = first + second + third; // Skapar variabel summa och tilldelan summan av inkommande data
    return sum; // Returnerar summan
}

let numbers = addThreeNumbers(10, 5, 15);
console.log(numbers);

let numberz = addThreeNumbers(
     addThreeNumbers(4, 1, 5),
     addThreeNumbers(40, 30, 20),
     addThreeNumbers(10, 15, 45)
);
console.log(numberz);