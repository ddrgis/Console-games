import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const askName = () => readlineSync.question('May I have your name?');

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

