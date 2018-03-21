/*

Un oggetto rappresenta una finestra di un browser e contiene due
campi: un array di tab aperte, e un numero che indica l’indice della tab
aperta nell’array
{
“Tab” : [“Facebook”, “GitHub”, “Gmail”],
“Active_tab” : 0
}
Il software deve guardare se c’è un social aperto e eliminarlo dalle tag,
nel caso la tab fosse attiva, deve attivare la successiva

*/

var w_init = {
   "tab" : [{"name" : "facebook", "type" : "social" },
            {"name" : "twitter", "type" : "social" },
            {"name" : "CorriereDellaSera", "type" : "news" },
            {"name" : "Linkedin", "type" : "social" },
            {"name" : "Gmail", "type" : "communication" },
            {"name" : "Airbnb", "type" : "trip" }],

   "active_tab" : [0, 1, 0, 0, 0, 0]
};


for (var i = 0; i < w.tab.length; i++) {
   if(w.active_tab[i]) {
      if ( w.tab[i].type == "social" ) {
         w.tab.splice(i, 1);
         w.active_tab.splice(i,1);
         w.active_tab[i] = 1;
      }

   }
}

console.log("After: ");
console.log(w);
