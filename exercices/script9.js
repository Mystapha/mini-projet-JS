// exerices sur une chaine de caractère
var rev1 = document.getElementById("rev");
var count1 = document.getElementById("count");
var cap1 = document.getElementById("cap");

function reverseString(){
    var chValue = document.getElementById("ch").value;
    rev1.value = chValue.split('').reverse().join('');
}

function countCharacters() {
    var chValue = document.getElementById("ch").value;
    count1.value = chValue.length;
}

function capitalizeWords() {
    var chValue = document.getElementById("ch").value;
    cap1.value = chValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// des exercices sur un tableau
function creerTableau() {

    let elements = document.getElementById('tab1').value;
    let tableau = elements.split(',');
    let tab=document.getElementById("tab")
   tab.value=("Le tableau créé est:", tableau);
}
function trouverMax() {
    var tab = document.getElementById("tab").value; 
    tab = tab.split(",").map(Number); 
    var max = Math.max(...tab); 
    document.getElementById("max").value = max;
}

function trouverMin() {
    var tab = document.getElementById("tab").value; 
    tab = tab.split(",").map(Number); 
    var min = Math.min(...tab); 
    document.getElementById("min").value = min;
}
function sommeTableau() {
    var tab = document.getElementById("tab").value;
    tab = tab.split(",").map(Number);
    var som = calculerSomme(tab);
    document.getElementById("som").value = som;
}
function calculerSomme(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}
