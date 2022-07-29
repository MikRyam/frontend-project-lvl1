import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const startGame = (gameRule, genGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = genGameRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;
