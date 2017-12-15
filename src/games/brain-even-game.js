import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const isEven = answer => answer % 2 === 0;
const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

export const getRiddle = () => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getRightAnswer(question);
  return createRiddle(question, correctAnswer);
};

export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === playerAnswer;

