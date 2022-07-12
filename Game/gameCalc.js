import greetings, { gameScenario, congrats } from '../src/index.js';

const gameRound = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * 3)];
  let result = '';
  switch (operator) {
    case '+':
      result = (randomNumber1 + randomNumber2).toString();
      break;
    case '-':
      result = (randomNumber1 - randomNumber2).toString();
      break;
    case '*':
      result = (randomNumber1 * randomNumber2).toString();
      break;
    default:
      result = '';
  }
  console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
  return result;
};

const gameCalc = () => {
  greetings();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    if (!gameScenario(gameRound())) {
      return false;
    }
  }
  return congrats();
};

export default gameCalc;
