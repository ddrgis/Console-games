import { cons, car, cdr } from 'hexlet-pairs';


const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

export const getRules = () => 'Answer "yes" if number even otherwise answer "no".';

const isEven = answer => answer % 2 === 0;
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

export const createRiddle = () => {
  const riddle = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const rightAnswer = getRightAnswer(riddle);
  return cons(riddle, rightAnswer);
};

export const printRiddle = (riddle) => {
  console.log(car(riddle));
};

export const isRight = (riddle, playerAnswer) => cdr(riddle) === playerAnswer;

