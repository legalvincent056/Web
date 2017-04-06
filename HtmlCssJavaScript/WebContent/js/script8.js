//Donne l'élément du DOM ciblé
var titre = document.getElementById("gros_titre");
alert(titre);

//donne la nombre de paragraphe
var tableau = document.getElementsByTagName("p");
alert("Notre page contient "+tableau.length+" paragraphes");

//donne le nombre de class "para" du document
var tableau2 = document.getElementsByClassName("para");
alert("Notre page contient "+tableau2.length+" elements de class para");

//donne le lien href de la sélection de a dans le p
var lien = document.querySelector("p a");
alert(lien);

//donne nombre d'élément de la classe para
var tableau3 = document.querySelectorAll(".para");
alert("Notre page contient "+tableau3.length+" elements de class para");