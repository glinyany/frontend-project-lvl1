/* eslint-disable no-plusplus */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => {
  let result;
  if (number % 2 === 0) {
    result = 'yes';
  } else { result = 'no'; }
  return result;
};

const brainGame = () => {
  let score = 0;
  for (let i = 0; i < 3; i++) {
    const rndNumber = getRandomInt(1, 50);
    console.log(`Question: ${rndNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isEven(rndNumber) === userAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(rndNumber)}'`);
      console.log('Let`s try again,', `${userName}!`);
      break;
    }
  }
  if (score === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

brainGame();
