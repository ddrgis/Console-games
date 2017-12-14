import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const askName = () => readlineSync.question('May I have your name? ');

const greet = (name) => {
  console.log(`Hello, ${name}!`);
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

const printQuestion = (question) => {
  console.log(car(question));
};

const askAnswer = () => readlineSync.question('Your answer: ');

export const startGame = (getRules, createQuestion, getResult) => {
  welcome();
  console.log(`${getRules()}\n`);
  const playerName = askName();
  greet(`${playerName}\n`);

  let rightAnswersCounter = 0;
  while (rightAnswersCounter < 3) {
    const question = createQuestion();
    printQuestion(question);
    const playerAnswer = askAnswer();

    const result = getResult(question, playerAnswer);
    if (car(result)) {
      rightAnswersCounter += 1;
      printCorrect();
    } else {
      printWrong(playerName, playerAnswer, cdr(question));
    }
    console.log();
  }
  congrats(playerName);
};

