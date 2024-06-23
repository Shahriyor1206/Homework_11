const diceGame = () => {
  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;

  let randomDice1 = `./img/dice${randomNum1}.png`;
  let randomDice2 = `./img/dice${randomNum2}.png`;

  let diceImage1 = document.querySelector('#p1');
  let diceImage2 = document.querySelector('#p2');

  diceImage1.setAttribute('src', randomDice1);
  diceImage2.setAttribute('src', randomDice2);

  let result = document.querySelector('#result');
  let p1Box = document.querySelector('.player_1');
  let p2Box = document.querySelector('.player_2');

  if (randomNum1 > randomNum2) {
    result.innerHTML = 'Player 1 Winner!';
    result.style.color = '#05BFDB';
    p1Box.style.borderColor = '#05BFDB';
    p2Box.style.borderColor = '#2C2C2C';
  } else if (randomNum1 === randomNum2) {
    result.innerHTML = 'Draw!';
    result.style.color = 'yellowgreen';
    p1Box.style.borderColor = 'yellowgreen';
    p2Box.style.borderColor = 'yellowgreen';
  } else {
    result.innerHTML = 'Player 2 Winner!';
    result.style.color = 'darkorange';
    p2Box.style.borderColor = 'darkorange';
    p1Box.style.borderColor = '#2C2C2C';
  }
};
