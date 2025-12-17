//initialize a count to store clicks
//listen for clicks when the button is pressed
//increment the count variable by 1 each time the button is clicked
//change count-el to reflect increment in html page

let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

