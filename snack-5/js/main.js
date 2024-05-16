'use strict';
/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/

//initialize the array
const numbers = [];

//intiialize the loop
for (let i = 0; i < 6; i++) {
    const number = parseInt(prompt('Inserisci un numero'));
    if (number % 2 !== 0) {

        //add the number in the array
        numbers.push(number);
    }
}

//print the array
console.log(numbers)