import startBrainGame from "../index.js";
import _ from 'lodash';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => { 
  const divider = [n]; // not necessary to add 1, every number can be divided by 1.
  if (n === 2) { return true; } // 2 is first prime 
  else if (n <= 1) { return false; } // 1 and all negatives cant be prime
  else if (n % 2 === 0) { return false; } // even numbers cant be prime
  else if (n >= 3) { // checking divisors for numbers > than 3.
    for (let i = 3; i <= n - 1; i+=2) { // we are checking for evenness, so we only need to check odd divisors
      if (n % i === 0) { divider.push(i); }
    }
    if (divider.length === 1) { return true; } // loop didnt add anything? Number is Prime.
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