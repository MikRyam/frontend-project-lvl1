import readlineSync from 'readline-sync';

let userName = '';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const gameScenario = (gameRound) => {
  const correctAnswer = gameRound;
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
  return userAnswer === correctAnswer;
};

const congrats = () => console.log(`Congratulations, ${userName}!`);

export { gameScenario, congrats };

export default greetings;
