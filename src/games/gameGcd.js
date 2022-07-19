import gameScenario from '../index.js';

const gameRound = () => {
  let randomNumber1 = Math.floor(Math.random() * 100) + 1;
  let randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const roundQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  while (randomNumber1 !== randomNumber2) {
    if (randomNumber1 > randomNumber2) {
      randomNumber1 -= randomNumber2;
    } else {
      randomNumber2 -= randomNumber1;
    }
  }
  const correctAnswer = (randomNumber1).toString();
  return [roundQuestion, correctAnswer];
};

const gameGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  gameScenario(gameRules, gameRound);
};

export default gameGcd;
