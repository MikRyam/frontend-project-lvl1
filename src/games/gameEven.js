import startGame from '../index.js';
import genRandomNumber from './serviceGames.js';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const genGameRound = () => {
  const randomNumber = genRandomNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const roundQuestion = randomNumber;
  return [roundQuestion, correctAnswer];
};

const startGameEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameRule, genGameRound);
};

export default startGameEven;
