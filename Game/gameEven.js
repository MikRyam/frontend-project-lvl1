import greetings, { gameScenario, congrats } from '../src/index.js';

const gameRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const result = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  return result;
};

const gameEven = () => {
  greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    if (!gameScenario(gameRound())) {
      return false;
    }
  }
  return congrats();
};

export default gameEven;
