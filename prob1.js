let label = document.getElementById("textInputLabel");
let input = document.getElementById("userInput");

input.onkeydown = function(e){
    label.innerText = e.target.value
};