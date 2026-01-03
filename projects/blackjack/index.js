let firstCard = 7
let secondCard = 9
let sum = firstCard + secondCard
let blackJack = false
let isAlive = true

if (sum === 21) {
    console.log("Yay! You got the BlackJack!🥳")
    blackJack = true
} else if (sum < 21) {
    console.log("Do you wnat to draw next dard?🙂")
} else {
    console.log("You lost the game!😭")
    isAlive = false
}

console.log(blackJack)