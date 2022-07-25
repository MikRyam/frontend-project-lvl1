import startGame from '../index.js';
import genRandomNumber from './serviceGames.js';

const getGCD = (num1, num2) => {
  let gcd;
  let number1 = num1;
  let number2 = num2;
  while (number1 > 0 && number2 > 0) {
    if (number1 > number2) {
      number1 %= number2;
      if (number1 === 0) {
        gcd = number2;
      }
    } else {
      number2 %= number1;
      if (number2 === 0) {
        gcd = number1;
      }
    }
  }
  return gcd;
};

const genGameRound = () => {
  const randomNumber1 = genRandomNumber(1000);
  const randomNumber2 = genRandomNumber(1000);
  const roundQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGCD(randomNumber1, randomNumber2).toString();
  return [roundQuestion, correctAnswer];
};

const startGameGcd = () => {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  startGame(gameRule, genGameRound);
};

export default startGameGcd;
