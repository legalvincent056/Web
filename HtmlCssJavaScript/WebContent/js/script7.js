//fonction normale
function multiplication(x,y){
	return x*y;
}

//alert(multiplication(3,2));


//fonction anonyme
var carre = function(x){
	return(x*x);
}


var a = prompt("Entrez le premier nombre");
var b = prompt("Entrez le deuxième nombre");

//Appel d'une fonction normale
alert(multiplication(a,b));


var c = prompt("Saisir une valeur :")
//Appel d'une fonction anonyme
alert(carre(c));


