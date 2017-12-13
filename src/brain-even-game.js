import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from './prng';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const isEven = answer => answer % 2 === 0;

const getRightAnswer = num => isEven(num);

export const createQuestion = () => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const rightAnswer = getRightAnswer(question);
  return cons(question, rightAnswer);
};

export const printQuestion = (question) => {
  console.log(car(question));
};

export const getResult = (question, playerAnswer) => {
  if (cdr(question) === playerAnswer) {
    return cons(true, playerAnswer);
  }

  return cons(false, playerAnswer);
};

