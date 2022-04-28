import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const findNod = (number1, number2) => { /* Evklid Alg */
  let biggerNumber = (number1 > number2) ? number1 : number2;
  const smallerNumber = (number1 < number2) ? number1 : number2;
  if (biggerNumber - smallerNumber === 0) { return biggerNumber; }
  biggerNumber -= smallerNumber;
  return findNod(biggerNumber, smallerNumber);
};

const generateRound = () => {
  const randomNumberFirst = _.random(1, 50);
  const randomNumberSecond = _.random(1, 50);
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  const answer = String(findNod(randomNumberFirst, randomNumberSecond));
  return [question, answer];
};

const gcdGame = () => startBrainGame(rulesOfGame, generateRound);

export default gcdGame;
