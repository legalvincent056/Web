
//affichage du nom de l'élément ciblé
var titre = document.getElementById("gros_titre");
alert(titre);

//affichage du contenu du titre defini ci dessus
var texteTitre = titre.innerHTML;
alert(texteTitre);

//affiche le nombre de class para1
var tableau2 = document.getElementsByClassName("para1");
alert("Notre page contient "+tableau2.length+" elements de class para1");

//récupère le text contenu dans tableau2 (le texte de para1)
var parag = tableau2[0].textContent;
alert(parag);


/*


var tableau = document.getElementsByTagName("p");

alert("Notre page contient "+tableau.length+" paragraphes");


var tableau2 = document.getElementsByClassName("para");
alert("Notre page contient "+tableau2.length+" elements de class para");


var lien = document.querySelector("p a");
alert(lien);

var tableau3 = document.querySelectorAll(".para");
alert("Notre page contient "+tableau3.length+" elements de class para");
*/