import { EASY } from '../components/Boards';
import { MEDIUM } from '../components/Boards';
import { HARD } from '../components/Boards';

const chunk = require('lodash.chunk');

export function getSudokuString(difficulty) {
  switch (difficulty) {
    case 'easy':
      return chooseRandomSudoku(EASY);
    case 'medium':
      return chooseRandomSudoku(MEDIUM);
    case 'hard':
      return chooseRandomSudoku(HARD);
  }
}

export function getSudokuArray(sudokuString) {
  const arrOfCells = [],
        sudokuArray = [];

  for (let i = 0; i < 81; i++) {
    if (sudokuString[i] === '0') {
      arrOfCells.push('');
    } else {
      arrOfCells.push(+sudokuString[i]);
    }
  }

  const arrOfLines = chunk(arrOfCells, 9);

  for (let i = 0; i < 9; i++) {
    const line = [];
    for (let j = 0; j < 9; j++) {
      line.push(newCell(i, j, arrOfLines[i][j], arrOfLines[i][j] === ''));
    }
    sudokuArray.push(line);
  }

  return sudokuArray;
}

function chooseRandomSudoku(arr) {
  const elem = getRandomNumber(0, arr.length - 1);
  return arr[elem];
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function newCell(i, j, value, editable) {
  return { value, editable, i, j }
}
