
// Création d'une fonction avec parametre optionnel
const message = function(texte = 'Texte par defaut'){
        alert(texte);
};
message(' Je suis le texte en paramètre');

//Création d'une fonction flechée
const somme = (a, b) => {
    alert('resultat : ' + (a + b));
};
somme(10, 2);
