#!/usr/bin/nodejs
import { getRules, getRiddle, isRight } from '../brain-even-game';
import { startGame } from '../engine';

startGame(getRules, getRiddle, isRight);
