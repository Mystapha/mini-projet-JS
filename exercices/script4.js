// let moy = prompt("Entrer la moyenne");

// if (parseInt(moy) >= 10) {
//     console.log("Admis");
// } else if (parseInt(moy) >= 9) {
//     console.log("Contrôle");
// } else {
//     console.log("Refusé");
// }

// let x = prompt("Entrer un entier");
// let y = prompt("Entrer un deuxième entier");
// let z = prompt("Entrer un troisième entier");

// if (parseInt(x) === parseInt(y) && parseInt(y) === parseInt(z)) {
//     console.log("Tous les entiers sont identiques");
// } else if (parseInt(x) === parseInt(y) || parseInt(x) === parseInt(z) || parseInt(y) === parseInt(z)) {
//     console.log("Deux entiers sont identiques");
// } else {
//     console.log("Tous les entiers sont différents");
// }

var  misteryNumber=prompt("Entrer un entier");
var myNumber=prompt("Enter un entier");
if (parseInt(myNumber)<parseInt(misteryNumber)) {
    console.log("+");
}else if (parseInt(myNumber)==parseInt(misteryNumber)) {
    console.log("Congratulations !")
}
else {
    console.log("-")
}
