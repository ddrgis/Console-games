import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

const MIN_NUMBER = -20;
const MAX_NUMBER = 20;

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const getQuestion = (num1, num2) => `${num1} ${num2}`;
const getRightAnswer = (num1, num2) => gcd(num1, num2);

export const getRules = () => 'Find the greatest common divisor of given numbers.';
export const getRiddle = () => {
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = getQuestion(num1, num2);
  const correctAnswer = getRightAnswer(num1, num2);
  return createRiddle(question, correctAnswer);
};
export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === parseInt(playerAnswer, 10);
