var str = prompt("Inserisci una stringa: " );


console.log(reverseString(str));

function reverseString(str) {
   var newStr = "";
   for (i = str.length-1; i >= 0 ; i--) {
      newStr += str.charAt(i);
   }
   return newStr;
}
