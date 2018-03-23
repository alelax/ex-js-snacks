/*

Scrivi una funzione che fonda due array prendendo alternativamente gli
elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

*/

var primoArray = ["a", "b", "c", "d", "e"];
var secondoArray = [1, 2, 3, 4, 5, 6, 7];

console.log(mergeArray(primoArray, secondoArray));


//Funzione che riceve in ingresso due array e li fonde. Se i due array hanno
//lunghezze diverse verifica qual'è il piu corto e Il risultato sarà un altro array
//che conterrà elementi del primo alternati a quelli del secondo, fino all'ultimo
//elemento dell'array piu corto poi inserirà in coda gli elementi rimanenti dell'array piu lungo.
function mergeArray(array1, array2) {
   var finalArray = new Array();

   if (array1.length == array2.length) {
      for (var i = 0; i < array1.length; i++) {
         finalArray.push(array1[i]);
         finalArray.push(array2[i]);
      }

   }  else if(array1.length > array2.length) {
         var lengthDifference = array1.length - array2.length;
         for (var i = 0; i < array1.length; i++) {
            while (i < array2.length) {
               finalArray.push(array1[i]);
               finalArray.push(array2[i]);
               i++;
            }
            finalArray.push(array1[i]);
         }
      }  else {
            var lengthDifference = array2.length - array1.length;
            for (var i = 0; i < array2.length; i++) {
               while (i < array1.length) {
                  finalArray.push(array1[i]);
                  finalArray.push(array2[i]);
                  i++;
               }
               finalArray.push(array2[i]);
            }
         }

   return finalArray;

}
