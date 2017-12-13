import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const askName = () => readlineSync.question('May I have your name?');

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

const printCorrect = () => {
  console.log('Correct!');
};

const printWrong = (playerAnswer, correctAnswer) => {
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
};

const printTryAgain = (name) => {
  console.log(`Let's try again, ${name}!`);
};

const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const startGame = (getRules, getQuestion, checkAnswer) => {
  console.log('Hello from Engine');
  // imp..
};

