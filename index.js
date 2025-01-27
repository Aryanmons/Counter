// let dec = document.getElementById("decrease");
// let res = document.getElementById("reset");
// let inc = document.getElementById("Increase")
// let countlabel = document.getElementById("labelid");
// let count = 0;

// inc.onclick = function(){
// count++;
// countlabel.textContent = count;
// }
// dec.onclick = function(){
//     count--;
//     countlabel.textContent = count;
// }
// res.onclick = function(){
//     count = 0;
//     countlabel.textContent = count; 
// }
const textbox = document.getElementById("text");
const celtofah = document.getElementById("forfah");
const fahtocel = document.getElementById("forcel");
const final = document.getElementById("result")
let temp;
function convert(){
if(celtofah.checked){
    temp = textbox.value
    temp = Number(temp);
    temp = temp * 9 / 5 + 32;
    final.textContent = temp.toFixed(1) + "°F";
//final.textContent = "Celsius to Fahrenheit"
}else if(fahtocel.checked){
//final.textContent = "Fahrenheit to Celsius"
temp = textbox.value
    temp = Number(temp);
    temp = (5 / 9) * (temp - 32);
    final.textContent = temp.toFixed(1) + "°C";
}else{
    final.textContent = "Select a Unit";
}
}