import { getRules, createQuestion, getResult } from '../src/brain-even-game';
import { startGame } from '../src/engine';

startGame(getRules, createQuestion, getResult);
