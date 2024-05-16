'use strict';
//initialize the invitation list
const invited = ['Pippo', 'Pluto', 'Paperino', 'Topolino'];

//intiialize the input
const firstName = prompt('Inserisci il tuo nome');

// check if the name is in the list
if (invited.includes(firstName)) {
    window.alert('Sei stato invitato');
} else {
    window.alert('Non sei stato invitato');
}