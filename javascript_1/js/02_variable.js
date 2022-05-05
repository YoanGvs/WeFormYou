// Declaration + affectation 
let prenom= 'gael'; //String

let age = 37; //Number

let enLigne = true; //Bolean 

let choix = null;//Null


console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enLigne);
console.log(typeof choix )

//Concatenation
console.log(prenom + '' + age);
console.log(`je m'appelle ${prenom}, j'ai ${age} ans`);

//Echapper un caractere antislash
console.log('il fait "beau aujourd\'hui"')

// Declaration et affectation d'une constante 
const VILLE = 'Rouen'; 

//Array
let tab = ['Pommes', 30 , true , ['bleu', 'rouge']];
//Grandeur du tableau 
console.log(tab.length);
//Index 1 
console.log(tab[1]);
//mot rouge
console.log(tab[3][1]);

//Object
let personne = {
    prenom: 'Gael',
    age : 37,
    adresse : {
        rue: "12 rue de la var",
        ville: 'Rouen'
    }
};

console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adresse.rue);


let a = 5;
let b = 2;

//Addition
console.log(a + b);
//Soustraction
console.log(a - b);
//Multiplication
console.log(a * b);
//Division
console.log(a + b);
//Modulo
console.log(a % b);

//Incrementer
a += 1; // a++ equivaut à : a= a + 1  
console.log(a);

//Decrementer
b -= 1; // a-- equivaut à : a= a - 1  
console.log(a);