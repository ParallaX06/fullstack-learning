let fruits = ["🍎", "🍊", "🍎", "🍎", "🍊"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function shelfSort() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍎") {
            appleShelf.innerText += fruits[i]
        } else {
            orangeShelf.innerText += fruits[i]
        }
    }
}
shelfSort()

