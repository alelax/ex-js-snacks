/*
   Simulare un countdown di 10 secondi che alla fine dice buon anno
*/

var Initialseconds = 10;

var v = window.setInterval(function(){

      console.log(Initialseconds);
      Initialseconds--;
      if(Initialseconds == -1) {
         alert("buon anno!");
         stopCountdown(v);
      }

}, 1000, Initialseconds)



function stopCountdown(stop) {
   window.clearInterval(stop);
}
