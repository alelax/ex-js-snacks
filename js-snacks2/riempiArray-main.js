/*

   L'input dell'utente verrà inserito in un array solo
   se il numero inserito è dispari

*/
var arr = new Array();

for (var i = 0; i < 6; i++) {
   var usrInput = parseInt( prompt("inserisci un numero: ") );
   if (!isPari(usrInput)) {
      arr.push(usrInput);
      console.log(arr);
   }

}

function isPari(usrInput) {
   var resto = usrInput % 2;
   if (resto == 0) {
      return true;
   } else {
      return false;
   }
}
