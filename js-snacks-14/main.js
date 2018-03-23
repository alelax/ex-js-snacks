/*

   Si scriva una funzione che accetta tre argomenti, un array e due numeri.
   La funzione ritornerà il numero di elementi all’interno dell’array compresi
   tra i due numeri

*/

var a = [5, 2 , 7, 15, 10, 12, 28, 6, 17];


do {

   var min = prompt("Inserisci il limite inferiore del range: ");
   var max = prompt("Inserisci il limite superiore del range: ");
   var rangeIs = numInrange(a, min, max);


} while (rangeIs == -1);

console.log(rangeIs);



function numInrange(NumArray, minLimit, maxLimit) {
   var min = 0;
   var max = 0;
   var counter = 0; // variabile che mi permettedi contenere sia il numero di elementi contenuti nel range stabilit
                    // ma anche di controllare se il range inserito è corretto!

   var canContinue = false; // Sarà uguale a false solo se il limite superiore verrà impostato uguale al limite inferiore

   //Controllo che imposta valori min e max correttamente, nel caso in cui non venissero inseriti in ordine. Inoltre
   //nel caso in cui venga inserito lo stesso numero per min e max la funzione restituisce -1 e l'utente dovra inserire
   //nuovamente il range.
   if(minLimit < maxLimit){
      min = minLimit;
      max = maxLimit;
      canContinue = true;
   } else if (minLimit > maxLimit){
      min = maxLimit;
      max = minLimit;
      canContinue = true;
   } else {
      canContinue = false;
   }

   if(canContinue){
      for (var i = 0; i < NumArray.length; i++) {
         var verifyNum = NumArray[i];
         if ( (verifyNum >= minLimit) && (verifyNum <= maxLimit) ) {
            counter++;
         }
      }
   }  else {
      counter = -1;
   }
   return counter;
}
