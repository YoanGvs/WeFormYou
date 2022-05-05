const QUESTIONS = [
    {
      question:
        'A quel compositeur est consacré le film Amadeus ?\n1. Beethoven\n2. Mozart',
      reponse: 2
    },
    {
      question: "Quelle est la capitale de l'Autriche ?\n1. Vienne\n2. Oslo",
      reponse: 1
    },
    {
      question:
        'Quel organe est perturbé par les acouphènes ?\n1. Les Pieds\n2. Les Oreilles',
      reponse: 2
    }];

let score = 0;

for (const v of QUESTIONS) {
  let userEntry = prompt(v.question);
  if (userEntry == v.reponse){
    alert(`Bonnes reponse`)
    score += 1;
    console.log(score); 
  } else {
    alert(' Mauvaise reponse ')
  }
}

if (score > 1){
  alert(`vous avez ${score} bonne reponse sur 3`);
}else{
  alert(`vous avez ${score} bonnes reponses sur 3`);
}



//  affichage de la boite de dialogue 

    // premiere question 
      // enregistrement de la reponse 
        //  message de bonne reponse 
        //ou
        // message mauvaise reponse 
        // ajout +1 en cas de bonnes reponse 

    // deuxieme question 
      // enregistrement de la reponse 
        // message de bonne reponse 
        //ou 
        // message mauvaise reponse 
        // ajout +1 en cas de bonnes reponse  

