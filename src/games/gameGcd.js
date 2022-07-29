import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  if (number1 > number2) {
    number1 -= number2;
  } else if (number2 > number1) {
    number2 -= number1;
  }
  return number1 === number2 ? number1 : getGCD(number1, number2);
};

const genGameRound = () => {
  const randomNumber1 = genRandomNumber(1000);
  const randomNumber2 = genRandomNumber(1000);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2).toString();
  return [question, correctAnswer];
};

const startGameGcd = () => {
  startGame(gameRule, genGameRound);
};

export default startGameGcd;
