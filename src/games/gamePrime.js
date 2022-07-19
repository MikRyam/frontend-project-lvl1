import greetings, { gameScenario, congrats } from '../src/index.js';

const gameRound = () => {
  const randomNumber = Math.floor(Math.random() * 3570) + 2;
  console.log(`Question: ${randomNumber}`);
  if (randomNumber === 2) {
    return 'yes';
  }
  const limit = Math.sqrt(randomNumber);
  for (let i = 2; i < limit; i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gamePrime = () => {
  greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    if (!gameScenario(gameRound())) {
      return false;
    }
  }
  return congrats();
};

export default gamePrime;
