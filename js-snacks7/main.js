/*

   Crea 10 oggetti che rappresentano una zucchina.
   Dividi in due array separati le zucchine che misurano
   meno o più di 15cm.
   Infine stampa separatamente quanto pesano i due
   gruppi di zucchine

*/

var listaZucchine = [
   {"varietà" : "Nera", "peso" : 70, "lunghezza" : 20},
   {"varietà" : "Fiorentina", "peso" : 95, "lunghezza" : 13},
   {"varietà" : "Siciliana", "peso" : 120, "lunghezza" : 15},
   {"varietà" : "Romanesca", "peso" : 105, "lunghezza" : 12},
   {"varietà" : "Striata d'italia", "peso" : 230, "lunghezza" : 10},
   {"varietà" : "trombetta", "peso" : 300, "lunghezza" : 18.5},
   {"varietà" : "tonda di Piacenza", "peso" : 160, "lunghezza" : 9},
   {"varietà" : "Secchio", "peso" : 90, "lunghezza" : 14.7},
   {"varietà" : "crookneck", "peso" : 280, "lunghezza" : 11.5},
   {"varietà" : "Patisson", "peso" : 145, "lunghezza" : 22}
]

var smallCourgettes = new Array();
var bigCourgettes = new Array();

for (var i = 0; i < listaZucchine.length; i++) {
   if (listaZucchine[i].lunghezza < 15) {
      smallCourgettes.push(listaZucchine[i]);
   } else {
      bigCourgettes.push(listaZucchine[i]);
   }
}
console.log("small:");
console.log(smallCourgettes);
console.log("big:");
console.log(bigCourgettes);
