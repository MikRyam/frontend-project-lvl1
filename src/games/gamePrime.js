import startGame from '../index.js';
import genRandomNumber from './serviceGames.js';

const isPrime = (randomNumber) => {
  if (randomNumber === 2) {
    return true;
  }
  const limit = Math.sqrt(randomNumber);
  for (let i = 2; i < limit; i += 1) {
    if (randomNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameRound = () => {
  const randomNumber = genRandomNumber(3570, 2);
  const roundQuestion = randomNumber;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

const startGamePrime = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameRule, genGameRound);
};

export default startGamePrime;
