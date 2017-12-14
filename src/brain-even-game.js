import { createRiddle, rightAnswer } from './riddle';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const isEven = answer => answer % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

export const getRiddle = () => {
  const riddle = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = getRightAnswer(riddle);
  return createRiddle(riddle, answer);
};

export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === playerAnswer;

