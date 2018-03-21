/*

   riempie l'array minore finchè la dimensione degli array non è equivalente

*/

var arr1 = [1,2,3,4,5,6];
var arr2 = [1,2,3,4,5,6,7,8,9,10];

do {
   var size1 = arr1.length;
   var size2 = arr2.length;

   if (size1<size2) {
      arr1.push(Math.random());
   }else if(size1>size2){
      arr2.push(Math.random());
   }

} while (size1 != size2);

console.log(arr1);
console.log(arr2);
