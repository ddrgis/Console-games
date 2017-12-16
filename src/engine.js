import readlineSync from 'readline-sync';
import { rightAnswer, printRiddle } from './riddle';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const askName = () => readlineSync.question('May I have your name? ');

const askAnswer = () => readlineSync.question('Your answer: ');
const greet = (name) => {
  console.log(`Hello, ${name}!\n`);
};
const printCorrect = () => {
  console.log('Correct!');
};
const printWrong = (playerName, playerAnswer, correctAnswer) => {
  const printTryAgain = (name) => {
    console.log(`Let's try again, ${name}!`);
  };
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  printTryAgain();
};
const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
const isRight = (riddle, playerAnswer) => rightAnswer(riddle) === playerAnswer;

export const startGame = (getRules, getRiddle) => {
  welcome();
  console.log(`${getRules()}\n`);
  const playerName = askName();
  greet(`${playerName}`);

  let rightAnswersCounter = 0;
  while (rightAnswersCounter < 3) {
    const riddle = getRiddle();
    printRiddle(riddle);
    const playerAnswer = askAnswer();
    if (isRight(riddle, playerAnswer)) {
      rightAnswersCounter += 1;
      printCorrect();
    } else {
      printWrong(playerName, playerAnswer, rightAnswer(riddle));
    }
    console.log();
  }
  congrats(playerName);
};

