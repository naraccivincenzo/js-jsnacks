'use strict';
/*Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, 
e stampare tutta la tabellina del 2 fino al numero inserito.*/

//intiialize the basic loop
for (let i = 2; i <= 1000; i += 2) {
    console.log(i);
}

//initialize the input
const userNumber = Number(prompt('Inserisci un numero'));

//intiialize the basic loop again
for (let i = 2; i <= userNumber; i += 2) {
    console.log(i);
}