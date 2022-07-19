import gameScenario from '../index.js';

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
  const roundQuestion = `Question: ${arr.join(' ')}`;
  const correctAnswer = removed.join();
  return [roundQuestion, correctAnswer];
};

const gameProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  gameScenario(gameRules, gameRound);
};

export default gameProgression;
