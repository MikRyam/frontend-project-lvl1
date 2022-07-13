import greetings, { gameScenario, congrats } from '../src/index.js';

const gameRound = () => {
  const startNumber = Math.floor(Math.random() * 30) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const arr = [startNumber];
  let nextNumber = startNumber;
  for (let i = 0; i < 9; i += 1) {
    nextNumber += step;
    arr.push(nextNumber);
  }
  const randomIndex = Math.floor(Math.random() * 8) + 1;
  const removed = arr.splice(randomIndex, 1, '..');
  console.log(`Question: ${arr.join(' ')}`);
  return removed.join();
};

const gameGcd = () => {
  greetings();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    if (!gameScenario(gameRound())) {
      return false;
    }
  }
  return congrats();
};

export default gameGcd;
