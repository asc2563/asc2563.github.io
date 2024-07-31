const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    attempts++;
    if (guess === randomNumber) {
        document.getElementById('message').innerHTML = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < randomNumber) {
        document.getElementById('message').innerHTML = 'Too low! Try guessing higher.';
    } else {
        document.getElementById('message').innerHTML = 'Too high! Try guessing lower.';
    }
    if (attempts === 10) {
        document.getElementById('message').innerHTML = 'you lost you A HUGE loser LLLLLL';
    } else if (attempts > 10) {
        document.getElementById('message').innerHTML = 'you lost you A HUGE loser LLLLLL';

    }
    console.log(attempts)
}


window.addEventListener("keydown", function (event) {
    console.log("Typed key: " + event.key)
    if (event.key == "Enter") {
        checkGuess()
    }
});
