// prompt code to guess correct number
Guess = prompt("Guess the number")
if (Guess == 18){
    console.log("Correct!")
}
else {
    console.log("Wrong!")
}


// prompt code to guess correct number and tell if user should go lower or higher
Guess = prompt("Guess the number")
if (Guess == 18){
    console.log("Correct!")
}
else if (Guess <= 12){
       console.log("Too low, Go higher") 
    }
else if(Guess >= 19){
            console.log("Too high, Go lower")
        }
else {
    console.log("Wrong!")
}

// prompt code to guess correct number
let numberToGuess = 18;
Guess = prompt("Guess the number");
if (Guess == numberToGuess){
    console.log("Correct!")
}
else {
    console.log("Wrong!");
}

// for loop that prints out 2 timestable from 1 to 12
for(var i= 1; i <= 12; i++){
    
    console.log("2" + " " + "x" + " " + "i" + " " + "=" + " " + 2 * i)
}


// for loop that prints out 2 - 6 timestable from 1 to 12
var Table = prompt("Select a timestable");
if (Table == 2) {
    for(var i= 1; i <= 12; i++){
    
    console.log("2" + " " + "x" + " " + "i" + " " + "=" + " " + 2 * i)
}
}
else if (Table == 3) {
    for(var i= 1; i <= 12; i++){
    
    console.log("3" + " " + "x" + " " + "i" + " " + "=" + " " + 3 * i)
}
}
else if (Table == 4) {
    for(var i= 1; i <= 12; i++){
    
    console.log("4" + " " + "x" + " " + "i" + " " + "=" + " " + 4 * i)
}
}else if (Table == 5) {
    for(var i= 1; i <= 12; i++){
    
    console.log("5" + " " + "x" + " " + "i" + " " + "=" + " " + 5 * i)
}
}
else if (Table == 6) {
    for(var i= 1; i <= 12; i++){
    
    console.log("6" + " " + "x" + " " + "i" + " " + "=" + " " + 6 * i)
}
}