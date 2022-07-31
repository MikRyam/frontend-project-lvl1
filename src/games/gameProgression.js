import startGame from '../index.js';
import genRandomNumber from '../genRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const genProgression = (startNumber, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const number = startNumber + step * i;
    progression.push(number);
  }
  return progression;
};

const genGameRound = () => {
  const startNumber = genRandomNumber(100);
  const step = genRandomNumber(10);
  const progressionLength = genRandomNumber(10, 5);
  const progression = genProgression(startNumber, step, progressionLength);
  const randomIndex = genRandomNumber(progressionLength - 1);
  const removedItem = progression.splice(randomIndex, 1, '..');
  const question = progression.join(' ');
  const correctAnswer = removedItem[0].toString();
  return [question, correctAnswer];
};

const startGameProgression = () => {
  startGame(gameRule, genGameRound);
};

export default startGameProgression;
