import gameScenario from '../index.js';

const gameRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const roundQuestion = `Question: ${randomNumber}`;
  return [roundQuestion, correctAnswer];
};

const gameEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameScenario(gameRules, gameRound);
};

export default gameEven;
