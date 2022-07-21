import startGame from '../index.js';

const genGameRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const roundQuestion = `Question: ${randomNumber}`;
  return [roundQuestion, correctAnswer];
};

const startGameEven = () => {
  const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(gameRule, genGameRound);
};

export default startGameEven;
