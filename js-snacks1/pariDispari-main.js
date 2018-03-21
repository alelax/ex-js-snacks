/*
   L'utente inserisce un numero. Se è pari il pc lo stampa, se è dispari
   stampa il numero successivo a quello inserito
*/
var usrInput = parseInt(prompt("Inserisci un numero qualsiasi: "));
var resto = usrInput % 2;

if (resto == 0) {
   alert(usrInput);
} else {
   alert((usrInput+1));
}
