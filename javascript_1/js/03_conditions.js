// Condition IF
/* let age = prompt('saisir votre age');

if (age < 18){
    alert('vous etes un mineur');
}else if (age >= 70) {
    alert('Vous etes un senior')
}else{
    alert('Vous etes Majeur');
}*/

// Conditions SWITCH
let vehicule = prompt ('quel vehicule souhaiter vous? Peugot, BMW , Ferrari').toLowerCase();

let km = prompt("Combien de KM souhaitez vous faire ? ");

const prix = {
    peugeot: 0.4,
    bmw: 0.6,
    ferrari: 0.8
};

switch (vehicule){
    case 'peugeot':{
        alert('Vous payerez : ' + prix.peugeot * km + '€')
    }
    case 'bmw':{
        alert('Vous payerez : ' + prix.bmw * km + '€')
    }
    case 'ferrari':{
        alert('Vous payerez : ' + prix.ferrari * km + '€')
    }
    default:
        alert('Veuilllez choisir un vehicule proposé par la liste')
    
}
