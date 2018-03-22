var num = [ randomNumber(1,100),
            randomNumber(1,100),
            randomNumber(1,100),
            randomNumber(1,100),
            randomNumber(1,100)
          ];

alert(num);

window.setTimeout( function(){

      var listNum = new Array();
      var result = new Array();

      // Il ciclo da la possibilità all'utente di inserire i numeri, che verranno
      //poi salvati in un array
      for (var i = 0; i < 5; i++) {
         usrNum = parseInt( prompt("inserisci un numero: ") );
         listNum.push(usrNum);
      }

      result = chekOrderNumber(num, listNum);
      alert("Hai indovintato " + result.length + " numeri: " + result);

   }, 2000);


// Funzione che stabilisce quali e quanti numeri inseriti dall'utente sono stati indovinati
function chekOrderNumber(startList, userList) {
   var result = new Array();
   for (var i = 0; i < num.length; i++) {
      if (startList[i]==userList[i]) {
         result.push(startList[i]);
      }
   }
   return result;
}

//Funzione che genera un numero casuale compreso tra l'estremo inferiore start
//e l'estremo superiore end, inclusi.
function randomNumber(start, end) {
   return Math.floor(Math.random() * (end - start + 1)) + start;
}
