var n=prompt("entrer un entier");
console.log(parseInt(n));
function estPaireOuImpaire(nombre){
 if (nombre % 2 ===0 ){
    console.log("est paire");
 }else{
    console.log("est impaire")
 }
}
let result=estPaireOuImpaire(n);
console.log(result);
