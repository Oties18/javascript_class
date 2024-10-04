Guess = prompt("Guess the number")
if (Guess == 18){
    console.log("Correct!")
}
else {
    console.log("Wrong!")
}

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

let numberToGuess = 18;
Guess = prompt("Guess the number");
if (Guess == numberToGuess){
    console.log("Correct!")
}
else {
    console.log("Wrong!");
}

for(var i= 1; i <= 12; i++){
    
    console.log("2" + " " + "x" + " " + "i" + " " + "=" + " " + 2 * i)
}