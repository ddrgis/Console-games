import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

const MIN_NUMBER = 10;
const MAX_NUMBER = 9999;

const balanceNumber = num => num;

const getQuestion = num => `${num}`;
const getRightAnswer = num => balanceNumber(num);

export const getRules = () => 'Balance the given number.';
export const getRiddle = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = getQuestion(num);
  const correctAnswer = getRightAnswer(num);
  return createRiddle(question, correctAnswer);
};

export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === parseInt(playerAnswer, 10);

