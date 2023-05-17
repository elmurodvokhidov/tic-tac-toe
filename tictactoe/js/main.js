const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.gameStatus');
let turn = prompt('Who do you want to play as, X or O?').toLocaleUpperCase();
let over = false;

if (turn === 'X' || turn === 'O') {
  gameStatus.innerText = `Next step: ${turn}`
}
else {
  gameStatus.innerText = 'You choose a non-existent hero! Please refresh!'
}

// Win List
const winList = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

// Next Step
let nextStep = turn === 'X' ? 'O' : 'X';

// Step Settings
function setStep(step) {
  gameStatus.innerText = step;
}

// Check winner
function checkWinner() {
  let winner = winList.find(item => {
    let first = cells[item[0]].innerText
    let second = cells[item[1]].innerText
    let third = cells[item[2]].innerText

    if (first === second && second === third && third !== '') {
      return item
    }
  })
  if (!winner) {
    return false
  }
  setStep(`Game over! Winner is: ${nextStep === 'X' ? 'X' : 'O'}`);
  over = true;
}

// Handle Click
function handleClick(val) {
  if (val.innerText === '' && !over && (turn === 'X' || turn === 'O')) {
    nextStep = nextStep === 'X' ? 'O' : 'X';
    val.innerText = nextStep
    setStep(nextStep === 'X' ? 'Next step: O' : 'Next step: X');
    checkWinner();
  }
  else {
    alert(over ? 'The game is already over! Please refresh!' : 'Already Clicked!' || turn !== 'X' || turn !== 'O' ? 'Please refresh!' : '')
  }
}

cells.forEach(val => val.addEventListener('click', () => { handleClick(val) }))