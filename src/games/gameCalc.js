import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'What is the result of the expression?';

const calculate = (operator, randomNumber1, randomNumber2) => {
  let result;
  switch (operator) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    case '*':
      result = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`Unexpected operator '${operator}'`);
  }
  return result;
};

const operators = ['+', '-', '*'];

const genGameRound = () => {
  const randomNumber1 = genRandomNumber();
  const randomNumber2 = genRandomNumber(10);
  const operator = operators[genRandomNumber(operators.length - 1)];
  const correctAnswer = calculate(operator, randomNumber1, randomNumber2).toString();
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  return [question, correctAnswer];
};

const startGameCalc = () => {
  startGame(gameRule, genGameRound);
};

export default startGameCalc;
