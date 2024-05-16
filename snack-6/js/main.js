'use strict';
/*Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero.
Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti ha perso.*/

//initialize the random number
const computerNumber = Math.floor(Math.random() * 11);

//intiialize the input
const userNumber = Number(prompt('Inserisci un numero da 0 a 10'));

//check the number
if (userNumber === computerNumber) {
    window.alert('Hai vinto il numero era prorio ' + computerNumber);
} else {
    window.alert('Hai perso, il numero era ' + computerNumber);
}
