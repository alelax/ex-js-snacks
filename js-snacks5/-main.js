var arr = new Array();
var sum = 0;

do {
   var usrIn = parseInt( prompt("Inserisci un numero: ") );
   arr.push(usrIn);
   sum = sumArr(arr);
   console.log(arr);
   console.log(sum);

} while (sum<50);

console.log(arr);
console.log(sum);

function sumArr(arr) {
   var somma = 0;
   for (var i = 0 ; i < arr.length; i++) {
      somma += arr[i];
   }
   return somma;
}
