// Le premier élément est 23
// Le deuxième élément est 42
// Tous les éléments suivants sont la somme des 2 éléments précédents, à laquelle on retire 1 si cette somme est paire
//
// Le nombre de Vitruve correspondrait au trentième élément de cette suite.

// Définir nos 2 premier élement
let elem = [
    23,
    42
];

// Calculer la somme des 2 élement et créer un nouvelle élement
for (let i = 2; i < 30; i++) {
    sum = elem[i - 1] + elem[i - 2];
    if (sum % 2 === 0){
        elem.push(sum - 1)
    }
    else {
        elem.push(sum)
    }
}
//Afficher le résultat du 30ieme
console.log(elem)
console.log('Le nombre de vitruve est de ' + elem[29]);