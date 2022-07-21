import startGame from '../index.js';

const genGameRound = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * 3)];
  let correctAnswer = '';
  switch (operator) {
    case '+':
      correctAnswer = (randomNumber1 + randomNumber2).toString();
      break;
    case '-':
      correctAnswer = (randomNumber1 - randomNumber2).toString();
      break;
    case '*':
      correctAnswer = (randomNumber1 * randomNumber2).toString();
      break;
    default:
      correctAnswer = (randomNumber1 + randomNumber2).toString();
  }
  const roundQuestion = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  return [roundQuestion, correctAnswer];
};

const startGameCalc = () => {
  const gameRule = 'What is the result of the expression?';
  startGame(gameRule, genGameRound);
};

export default startGameCalc;
