let time = 10

console.log(time)

function countdown() {
    time = time - 1
    console.log(time)
}

for (let i = 1; i < 10; i++) {
    countdown()
}

console.log("BOOM")