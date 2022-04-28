import startBrainGame from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (n) => n % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInt(1, 50);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const evenGame = () => startBrainGame(rulesOfGame, generateRound);

export default evenGame;
