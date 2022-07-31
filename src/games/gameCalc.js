import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'What is the result of the expression?';

const calculate = (operator, randomNumber1, randomNumber2) => {
  switch (operator) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    case '*':
      return randomNumber1 * randomNumber2;
    default:
      throw new Error(`Unexpected operator '${operator}'`);
  }
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
