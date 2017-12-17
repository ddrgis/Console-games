import { createRiddle } from '../riddle';
import getRandomInt from '../random-generator';
import { startGame } from '../engine';

const MIN_STEP = 1;
const MAX_STEP = 20;
const MIN_START_NUMBER = 0;
const MAX_START_NUMBER = 20;
const STEPS = 10;
const getQuestion = progression => `What number is missing in this progression?\n${progression}`;

export const getRules = () => 'What number is missing in a progression';
const getRiddle = () => {
  const startNum = getRandomInt(MIN_START_NUMBER, MAX_START_NUMBER);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const missedNumIndex = getRandomInt(1, STEPS);
  const iter = (currentNum, counter, acc, missedNum) => {
    if (counter >= STEPS) {
      return createRiddle(getQuestion(acc), missedNum.toString());
    }
    const lastNum = currentNum + step;
    const newCounter = counter + 1;

    if (counter === missedNumIndex) {
      const newMissedNum = lastNum;
      const newAcc = `${acc}.. `;
      return iter(lastNum, newCounter, newAcc, newMissedNum);
    }
    const newAcc = `${acc}${lastNum} `;
    return iter(lastNum, newCounter, newAcc, missedNum);
  };

  return iter(startNum, 1, `${startNum} `, undefined);
};
export const start = () => {
  startGame(getRules, getRiddle);
};
