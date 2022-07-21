import startGame from '../index.js';

const genGameRound = () => {
  const randomNumber = Math.floor(Math.random() * 3570) + 2;
  const roundQuestion = `Question: ${randomNumber}`;
  let correctAnswer = 'yes';
  if (randomNumber === 2) {
    return correctAnswer;
  }
  const limit = Math.sqrt(randomNumber);
  for (let i = 2; i < limit; i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return [roundQuestion, correctAnswer];
};

const startGamePrime = () => {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(gameRule, genGameRound);
};

export default startGamePrime;
