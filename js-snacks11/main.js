

var rot_13 = [["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
              ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M"]
             ];

var strInput = prompt("Inserire una stringa: ");

var newStr = "";

for (var i = 0; i < strInput.length; i++) {
   var searchChar = strInput.charAt(i);
   var x = rot_13[0].indexOf(searchChar, 0);
   console.log(x);
   console.log(rot_13[1][searchChar]);
}
console.log(newStr);
