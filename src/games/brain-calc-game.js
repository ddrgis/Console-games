import { createRiddle, rightAnswer } from '../riddle';
import getRandomInt from '../prng';

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

const getOperator = () => {
  const operatorNumber = getRandomInt(0, 2);
  switch (operatorNumber) {
    case 0:
      return plus;
    case 1:
      return minus;
    case 2:
      return multiplication;
    default:
      throw new Error(`Can't create operator from number ${operatorNumber}'`);
  }
};

const getOperatorSign = operator => operator();

const getQuestion = (operator, operand1, operand2) => {
  const sign = getOperatorSign(operator);
  return `${operand1} ${sign} ${operand2}`;
};

const getRightAnswer = (operator, operand1, operand2) => operator(operand1, operand2);

export const getRules = () => 'What is the result of the expression?';

export const getRiddle = () => {
  const operator = getOperator();
  const operand1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operand2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = getQuestion(operator, operand1, operand2);
  const correctAnswer = getRightAnswer(operator, operand1, operand2);
  return createRiddle(question, correctAnswer);
};

export const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === parseInt(playerAnswer, 10);
