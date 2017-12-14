import { getRules, createRiddle, isRight } from '../src/brain-even-game';
import { startGame } from '../src/engine';

startGame(getRules, createRiddle, isRight);
