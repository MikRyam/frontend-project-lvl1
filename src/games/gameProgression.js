import startGame from '../index.js';

const genGameRound = () => {
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

const startGameProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  startGame(gameRule, genGameRound);
};

export default startGameProgression;
