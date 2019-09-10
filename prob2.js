let label = document.getElementById("textInputLabel");
let input = document.getElementById("userInput");
let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";
let counter = 0;
let reset = document.getElementById("reset");
let stringSelect2 = "Create a page with a blank label and a text area. When someone types into the text area, change the label to show what the person has typed";
let stringSelect3 = "Create two additional strings and randomly select one of the three each time the page is reloaded.";
let stringArray = [codeCrewString, stringSelect2, stringSelect3];

//function to generate a random number given a maximum limit
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//selects one of the strings using the random number as the index
randomString = stringArray[randomInt(stringArray.length)];
input.onkeydown = function () {
    label.innerText = label.innerText + randomString[counter];
    counter++
};

//reset function that will make the label blank and reset the counter to start at the beginning of the string
reset.onclick = function () {
    label.innerText = "";
    counter = 0
};