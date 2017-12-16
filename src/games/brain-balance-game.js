import { createRiddle } from '../riddle';
import getRandomInt from '../prng';
import { startGame } from '../engine';

const MIN_NUMBER = 10;
const MAX_NUMBER = 9999;

const balanceNumber = (num) => {
  const sort = n => n.toString().split('').sort().join('');
  const isDiffBiggerThenOne =
    (strNum1, strNum2) => Math.abs(parseInt(strNum1, 10) - parseInt(strNum2, 10)) > 1;
  const isBalanced = (stringNum) => {
    for (let i = 0; i < stringNum.length; i += 1) {
      for (let j = 0; j < stringNum.length; j += 1) {
        if (isDiffBiggerThenOne(stringNum[i], stringNum[j])) {
          return false;
        }
      }
    }
    return true;
  };
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

  const balance = (stringNum) => {
    if (isBalanced(stringNum)) {
      return stringNum;
    }

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

    const min = stringNum[minIndex];
    const max = stringNum[maxIndex];

    if (isDiffBiggerThenOne(min, max)) {
      return balance(swapUnits(stringNum, minIndex, maxIndex));
    }
    return stringNum;
  };
  return sort(balance(num.toString()));
};

const getRightAnswer = num => balanceNumber(num).toString();

export const getRules = () => 'Balance the given number.';
export const getRiddle = () => {
  const num = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const correctAnswer = getRightAnswer(num);
  return createRiddle(num, correctAnswer);
};
export const start = () => {
  startGame(getRules, getRiddle);
};
