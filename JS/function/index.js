//function 1

function logger() {
    console.log(42)
}

logger()

//function 2
let lap1=34
let lap2=33
let lap3=36

function totalLapTime() {
    console.log(lap1 + lap2 + lap3)
}

totalLapTime()

//function 3

let lapsCompleted = 0

function countLap() {
    lapsCompleted = lapsCompleted + 1
}

countLap()
countLap()
countLap()

console.log(lapsCompleted)