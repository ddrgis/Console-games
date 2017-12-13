import { cons, cdr } from 'hexlet-pairs';
import { getRandomInt } from './prng';

const MIN_NUMBER = 0;
const MAX_NUMBER = 100;

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const isEven = answer => answer % 2 === 0;

const getRightAnswer = num => isEven(num);

export const createQuestion = () => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const rightAnswer = getRightAnswer(question);
  console.log(`Question: ${question}`);
  return cons(question, rightAnswer);
};

export const checkAnswer = (question, answer) => {
  if (cdr(question) === answer) {
    return cons(true, answer);
  }

  return cons(false, answer);
};

