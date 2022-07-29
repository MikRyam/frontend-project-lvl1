import startGame from '../index.js';
import genRandomNumber from './serviceGames.js';

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
  return result.toString();
};

const genGameRound = () => {
  const randomNumber1 = genRandomNumber();
  const randomNumber2 = genRandomNumber(10);
  const operators = ['+', '-', '*'];
  const operator = operators[genRandomNumber(operators.length - 1)];
  const correctAnswer = calculate(operator, randomNumber1, randomNumber2);
  const roundQuestion = `${randomNumber1} ${operator} ${randomNumber2}`;
  return [roundQuestion, correctAnswer];
};

const startGameCalc = () => {
  const gameRule = 'What is the result of the expression?';
  startGame(gameRule, genGameRound);
};

export default startGameCalc;
