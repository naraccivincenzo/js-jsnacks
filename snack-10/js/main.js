'use strict';
/*Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.*/

//initialize the array
const userNumber = [];
//init the first number
const number1 = Number(prompt('Inserisci un numero'));
//add the number in the array in position 0
userNumber.push(number1);

//intiialize the loop
for (let i = 1; i < 100; i++) {

    //intiialize the second number
    const number2 = Number(prompt('Inserisci un numero'));

    //add the number in the array
    userNumber.push(number2);

    //check if the numbers are the same
    if (userNumber[i] === userNumber[i - 1]) {
        console.log('Hai inserito due volte lo stesso numero');
        break;
    }
}