import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => (!num2 ? num1 : getGCD(num2, num1 % num2));

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
