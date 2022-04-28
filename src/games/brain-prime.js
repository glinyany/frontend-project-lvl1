import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  const divider = [n];
  if (n === 2) {
    return true;
  }
  else if (n <= 1) {
    return false;
  }
  else if (n % 2 === 0) {
    return false;
  }
  else if (n >= 3) {
    for (let i = 3; i <= n - 1; i += 2) {
      if (n % i === 0) {
        divider.push(i);
      }
    }
    if (divider.length === 1) {
      return true;
    }
  }
};

const generateRound = () => {
  const randomNumber = _.random(1, 100);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => startBrainGame(rulesOfGame, generateRound);

export default primeGame;
