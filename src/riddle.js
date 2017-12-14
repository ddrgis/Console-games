import { cons, car, cdr } from 'hexlet-pairs';

const riddleText = riddle => car(riddle);
export const createRiddle = (question, answer) => cons(question, answer);
export const rightAnswer = riddle => cdr(riddle);
export const printRiddle = (riddle) => {
  console.log(`Question: ${riddleText(riddle)}`);
};

