import greetings, { gameScenario, congrats } from '../src/index.js';

const gameRound = () => {
  let randomNumber1 = Math.floor(Math.random() * 100) + 1;
  let randomNumber2 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  while (randomNumber1 !== randomNumber2) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 -= randomNumber2;
    } else {
      randomNumber2 -= randomNumber1;
    }
  }
  const gcdResult = (randomNumber1).toString();

  return gcdResult;
};

const gameGcd = () => {
  greetings();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    if (!gameScenario(gameRound())) {
      return false;
    }
  }
  return congrats();
};

export default gameGcd;
