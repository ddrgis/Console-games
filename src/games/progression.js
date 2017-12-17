import { createRiddle } from '../riddle';
import getRandomInt from '../random-generator';
import { startGame } from '../engine';

const MIN_STEP = 1;
const MAX_STEP = 20;
const MIN_START_NUMBER = 0;
const MAX_START_NUMBER = 20;
const STEPS = 10;

const getQuestion = progression => `What number is missing in this progression?\n${progression}`;
const createProgression = () => {
  const startNum = getRandomInt(MIN_START_NUMBER, MAX_START_NUMBER);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const iter = (currentNum, counter, acc) => {
    if (counter >= STEPS) {
      return acc;
    }
    const lastNum = currentNum + step;
    const newAcc = `${acc}${lastNum} `;
    const newCounter = counter + 1;

    return iter(lastNum, newCounter, newAcc);
  };
  return iter(startNum, 1, `${startNum} `);
};

export const getRules = () => 'What number is missing in a progression';
export const getRiddle = () => {
  const progression = createProgression();
  const missedNumIndex = getRandomInt(1, STEPS);
  const progressionArray = progression.split(' ');
  const correctAnswer = progressionArray[missedNumIndex];
  progressionArray[missedNumIndex] = '..';
  return createRiddle(getQuestion(progressionArray.join(' ')), correctAnswer);
};
export const start = () => {
  startGame(getRules, getRiddle);
};
