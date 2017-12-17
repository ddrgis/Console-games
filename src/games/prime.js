import { createRiddle } from '../riddle';
import getRandomInt from '../prng';
import { startGame } from '../engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 50;

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestion = num => `Is this number prime? ${num}`;
const getRightAnswer = num => (isPrime(num) ? 'yes' : 'no');

export const getRules = () => 'Answer "yes" if number is prime otherwise answer "no".';
export const getRiddle = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const question = getQuestion(num);
  const rightAnswer = getRightAnswer(num);
  return createRiddle(question, rightAnswer);
};
export const start = () => {
  startGame(getRules, getRiddle);
};
