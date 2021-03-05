let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result p')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * choices.length)
    return choices[randomNumber]
}

function convertToWord(word) {
    if (word == 'rock') return 'Rock'
    if (word == 'paper') return 'Paper'
    return 'Scissors'
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice)

    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} beats ${convertToWord(
        computerChoice
    )}${smallCompWord}. You win!`

    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const userChoice_div = document.getElementById(userChoice)

    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} loses to ${convertToWord(
        computerChoice
    )}${smallCompWord}. You lost!`

    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub()
    const smallCompWord = 'comp'.fontsize(3).sub()
    const userChoice_div = document.getElementById(userChoice)

    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} equals ${convertToWord(
        computerChoice
    )}${smallCompWord}. It's a draw.!`

    userChoice_div.classList.add('gray-glow')
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice)
            break
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            lose(userChoice, computerChoice)
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rock_div.addEventListener('click', () => game('rock'))
    paper_div.addEventListener('click', () => game('paper'))
    scissors_div.addEventListener('click', () => game('scissors'))
}

main()
