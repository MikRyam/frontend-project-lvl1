import startGame from '../index.js';
import genRandomNumber from './serviceGames.js';

const genProgression = () => {
  const startNumber = genRandomNumber(100);
  const step = genRandomNumber(10);
  const progressionLength = genRandomNumber(10, 5);
  const progression = [startNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    const nextNumber = startNumber + step * i;
    progression.push(nextNumber);
  }
  const randomIndex = genRandomNumber(progressionLength - 1);
  const removedItem = progression.splice(randomIndex, 1, '..');
  return [progression.join(' '), removedItem.join()];
};

const genGameRound = () => {
  const [progression, removedItem] = genProgression();
  const roundQuestion = progression;
  const correctAnswer = removedItem;
  return [roundQuestion, correctAnswer];
};

const startGameProgression = () => {
  const gameRule = 'What number is missing in the progression?';
  startGame(gameRule, genGameRound);
};

export default startGameProgression;
