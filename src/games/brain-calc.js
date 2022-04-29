import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What is the result of the expression?';
const listOperators = ['+', '-', '*'];

const calc = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '+': return numberFirst + numberSecond;
    case '-': return numberFirst - numberSecond;
    case '*': return numberFirst * numberSecond;
    default:
      throw new Error(`Wrong operator - ${operator}, use (+ or - or *)`);
  }
};

const generateRound = () => {
  const numberFirst = _.random(1, 50);
  const numberSecond = _.random(1, 50);
  const operator = listOperators[_.random(listOperators.length - 1)];
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const answer = String(calc(numberFirst, numberSecond, operator));
  return [question, answer];
};

const calcGame = () => startBrainGame(rulesOfGame, generateRound);

export default calcGame;
