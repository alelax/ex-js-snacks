/*

   Crea 10 oggetti che rappresentano una zucchina,
   indicandone per ognuno varietà, peso e lunghezza.
   Calcola quanto pesano tutte le zucchine.

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

var pesoTot = 0;

for (var i = 0; i < listaZucchine.length; i++) {
   pesoTot += listaZucchine[i].peso;
}

alert("Il peso totale è: " + pesoTot + " g");
