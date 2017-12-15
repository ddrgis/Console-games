import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

export const getRules = () => 'Balance the given number.';

export const getRiddle = () => {
  return createRiddle();
};

export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === parseInt(playerAnswer, 10);

