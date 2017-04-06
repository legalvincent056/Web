
//ajoute HTML au titre h1
document.getElementById("gros_titre").innerHTML +=" HTML";

//trouve la a du lien et change la cible de l'adresse
document.querySelector("a").href="http://wikipedia.org";

//prend le premier paragraphe et le nomme para1. A ce moment, le CSS para1 reconnait la cible
document.querySelector("p").className="para1";

	
//change la couleur du titre h1
document.getElementById("gros_titre").className="gros_titre1";

document.querySelector("img").src="img/voiture2.jpg";



//Créer un élément paragraphe
var newPara = document.createElement('p');
newPara.id='nouveau';
//Création d'un texte
var texte = document.createTextNode("Texte inséré !");
//Association du texte au paragraphe
newPara.appendChild(texte);
//Association du paragraphe au body du document
document.body.appendChild(newPara);


//Créer un élément paragraphe
var newPara2 = document.createElement('p');
newPara2.id='nouveau2';
//Création d'un texte
var texte2 = document.createTextNode("Texte inséré avant!");
//Association du texte au paragraphe
newPara2.appendChild(texte2);

//prend le 1er paragraphe
var par1=document.querySelector('p');
//place le texte avant par1 (le premier paragraphe du body)
document.body.insertBefore(newPara2,par1);



//Supprimer un titre
var texteSupprime = document.querySelector('h2');
document.body.removeChild(texteSupprime);


//Création d'un texte avant l'image
var newPara3 = document.createElement('p');
newPara3.id='nouveau3';
var texte3 = document.createTextNode("Texte à déplacer à droite");

newPara3.appendChild(texte3);

var par2=document.querySelector('img');
document.body.insertBefore(newPara3,par2);

//Décaller le texte à droite
document.getElementById("nouveau3").className = "texteAdroite";
