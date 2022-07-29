import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  const limit = Math.sqrt(randomNumber);
  for (let i = 2; i <= limit; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameRound = () => {
  const question = genRandomNumber(3570, 2);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGamePrime = () => {
  startGame(gameRule, genGameRound);
};

export default startGamePrime;
