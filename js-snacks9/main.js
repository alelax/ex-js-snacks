var fpenultimo = 1;
var fultimo = 1;
var fibo = 0;
var input = prompt("Inserire il numero del quale si vuole calcolare la serie di Fibonacci: ");

	alert("\nI valori della serie di Fibonacci per il numero " + input + " sono: \n");

	console.log(fpenultimo);
	for(i=2; i<input; i++){

		console.log(fultimo);
		fibo = fpenultimo + fultimo;

		fpenultimo = fultimo;
		fultimo = fibo;

	}
console.log("Risultato: " + fibo);
