import { createRiddle } from '../riddle';
import getRandomInt from '../random-generator';
import { startGame } from '../engine';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const plus = (op1, op2) => {
  if (op1 === undefined && op2 === undefined) {
    return '+';
  }
  return op1 + op2;
};

const minus = (op1, op2) => {
  if (op1 === undefined && op2 === undefined) {
    return '-';
  }
  return op1 - op2;
};

const multiplication = (op1, op2) => {
  if (op1 === undefined && op2 === undefined) {
    return '*';
  }
  return op1 * op2;
};

const getRandomOperatorSign = () => {
  const operatorNumber = getRandomInt(0, 3);
  switch (operatorNumber) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      throw new Error(`Can't create operator sign from number ${operatorNumber}'`);
  }
};

const getQuestion = (sign, operand1, operand2) => `${operand1} ${sign} ${operand2}`;
const getRightAnswer = (operator, operand1, operand2) => operator(operand1, operand2).toString();

export const getRules = () => 'What is the result of the expression?';
export const getRiddle = () => {
  const sign = getRandomOperatorSign();
  const operand1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operand2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const questsion = getQuestion(sign, operand1, operand2);
  switch (sign) {
    case '+':
      return createRiddle(questsion, getRightAnswer(plus, operand1, operand2));
    case '-':
      return createRiddle(questsion, getRightAnswer(minus, operand1, operand2));
    case '*':
      return createRiddle(questsion, getRightAnswer(multiplication, operand1, operand2));
    default:
      throw new Error(`Can't create operator from sing "${sign}"'`);
  }
};
export const start = () => {
  startGame(getRules, getRiddle);
};
