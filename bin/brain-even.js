import { getRules, createQuestion, checkAnswer } from '../src/brain-even-game';
import { startGame } from '../src/engine';

console.log('Hello from brain-even.js');
startGame(getRules, createQuestion, checkAnswer);
