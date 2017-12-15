#!/usr/bin/nodejs
import { getRules, getRiddle, isRight } from '../games/brain-calc-game';
import { startGame } from '../engine';

startGame(getRules, getRiddle, isRight);
