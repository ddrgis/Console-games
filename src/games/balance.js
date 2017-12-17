import { createRiddle } from '../riddle';
import getRandomInt from '../random-generator';
import { startGame } from '../engine';

const MIN_NUMBER = 10;
const MAX_NUMBER = 9999;

const sort = n => n.toString().split('').sort().join('');
const isDiffBiggerThenOne =
  (strNum1, strNum2) => Math.abs(parseInt(strNum1, 10) - parseInt(strNum2, 10)) > 1;

const isBalanced = (strNum, minIndex, maxIndex) =>
  !isDiffBiggerThenOne(strNum[minIndex], strNum[maxIndex]);

const balance = (stringNum) => {
  const swapUnits = (str, minIndex, maxIndex) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      switch (i) {
        case minIndex:
          result += parseInt(str[maxIndex], 10) - 1;
          break;
        case maxIndex:
          result += parseInt(str[minIndex], 10) + 1;
          break;
        default:
          result += str[i];
      }
    }
    return result;
  };

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < stringNum.length; i += 1) {
    if (stringNum[i] < stringNum[minIndex]) {
      minIndex = i;
    }
    if (stringNum[i] > stringNum[maxIndex]) {
      maxIndex = i;
    }
  }

  if (isBalanced(stringNum, minIndex, maxIndex)) {
    return sort(stringNum);
  }
  return balance(swapUnits(stringNum, minIndex, maxIndex));
};

export const getRules = () => 'Balance the given number.';
export const getRiddle = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = balance(num.toString()).toString();
  return createRiddle(num, correctAnswer);
};
export const start = () => {
  startGame(getRules, getRiddle);
};
