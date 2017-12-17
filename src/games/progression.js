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
export const getRiddle = () => {
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const missedStep = getRandomInt(1, STEPS);

  let currentNumber = getRandomInt(MIN_START_NUMBER, MAX_START_NUMBER);
  let progression = '';
  let correctAnswer;
  for (let i = 0; i < STEPS; i += 1) {
    if (i === missedStep) {
      correctAnswer = currentNumber;
      progression += '.. ';
    } else {
      progression += `${currentNumber} `;
    }
    currentNumber += step;
  }
  return createRiddle(getQuestion(progression), correctAnswer.toString());
};
export const start = () => {
  startGame(getRules, getRiddle);
};
