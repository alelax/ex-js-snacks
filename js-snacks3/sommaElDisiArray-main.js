/*

   sommo numeri contenuti in posizione dispari

*/

var arr = [1, 5, 2 , 5, 2, 5, 2 , 5, 2, 5, 4];
var sum = 0;
for (var i = 0 ; i < arr.length; i++) {
   if ( !isPari(i) ) {
      sum += arr[i];
      console.log("index:" + i);
      console.log(sum);
   }

}


function isPari(n) {
   var resto = n % 2;
   if (resto == 0) {
      return true;
   } else {
      return false;
   }
}
