
import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = "What is the result of the expression?";
const listOperators = ['+', '-', '*'];

const calc = (randomNumberFirst, randomNumberSecond, randomOperator) => {
  switch (randomOperator) {
    case '+': return randomNumberFirst + randomNumberSecond;
    case '-': return randomNumberFirst - randomNumberSecond;
    case '*': return randomNumberFirst * randomNumberSecond;
    default:
      throw new Error(`Wrong operator - ${randomOperator}, use (+ or - or *)`);
  }
};

const generateRound = () => {
  const randomNumberFirst = _.random(1,10);
  const randomNumberSecond = _.random(1,10);
  const randomOperator = listOperators[_.random(listOperators.length - 1)];
  const question = `${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`;
  const answer = String(calc(randomNumberFirst, randomNumberSecond, randomOperator));
  return [question, answer];  
};

const calcGame = () => startBrainGame(rulesOfGame, generateRound); 

export default calcGame;