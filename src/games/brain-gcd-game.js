import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

export const getRules = () => '';
export const getRiddle = () => {};
export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === parseInt(playerAnswer, 10);
