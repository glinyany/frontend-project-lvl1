import startBrainGame from "../index.js";
import _ from 'lodash';

const rulesOfGame = 'What number is missing in the progression?';
let valueOfItem;

const generateProgression = (startItem, stepItem) => {
    const progressionArray = [];
    const progressionLength = 10;
    const hiddenItemIndex = _.random(1, 9);
    for (let i = 0; i < progressionLength - 1; i += 1) {
      if (i === 0) { progressionArray.push(startItem); } 
      progressionArray.push(progressionArray[i] + stepItem);
    }
    valueOfItem = progressionArray[hiddenItemIndex];
    progressionArray[hiddenItemIndex] = '..';
    const arrToPrint = progressionArray.join(' ');
    return arrToPrint;
};

const generateRound = () => {
  const randomStarterInt = _.random(1, 20);
  const randomHowBigStep = _.random(2, 9);
  const question = generateProgression(randomStarterInt,randomHowBigStep);
  const answer = String(valueOfItem);
  return [question, answer];
};

const progressionGame = () => startBrainGame(rulesOfGame, generateRound);

export default progressionGame;