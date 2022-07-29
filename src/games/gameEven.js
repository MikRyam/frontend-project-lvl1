import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const genGameRound = () => {
  const question = genRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGameEven = () => {
  startGame(gameRule, genGameRound);
};

export default startGameEven;
