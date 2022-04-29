import _ from 'lodash';
import startBrainGame from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const generateProgression = (startItem, stepItem) => {
  const progressionArray = [];
  const progressionLength = 10;
  for (let i = 0; i < progressionLength - 1; i += 1) {
    if (i === 0) {
      progressionArray.push(startItem);
    }
    progressionArray.push(progressionArray[i] + stepItem);
  }
  return progressionArray;
};

const generateRound = () => {
  const starterInt = _.random(1, 20);
  const howBigStep = _.random(2, 9);
  const hiddenItemIndex = _.random(1, 9);
  const progression = generateProgression(starterInt, howBigStep);
  const hiddenItemValue = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hiddenItemValue);
  return [question, answer];
};

const progressionGame = () => startBrainGame(rulesOfGame, generateRound);

export default progressionGame;
