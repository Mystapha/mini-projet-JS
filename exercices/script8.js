var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var res=document.getElementById("result");
var res1=document.getElementById("result1");
var res2=document.getElementById("result2");
var res3=document.getElementById("result3");
var res4=document.getElementById("result4");
function somme(){
   res.value = parseInt(n1.value)+parseInt(n2.value);
}
function sous(){
    res1.value = parseInt(n1.value)-parseInt(n2.value);
 }
function multi(){
    res2.value = parseInt(n1.value)*parseInt(n2.value);
 }
function Div(){
    res3.value = parseInt(n1.value)/parseInt(n2.value);
 }
function puis(){
    res4.value = (parseInt(n1.value)+parseInt(n2.value))*(parseInt(n1.value)+parseInt(n2.value));
 }
