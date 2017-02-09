import { EASY, MEDIUM, HARD } from '../components/Boards';
import chunk from 'lodash.chunk';

export const getSudokuArray = (sudokuString) => {
  const arrOfCells = [];
  const sudokuArray = [];

  for (let i = 0; i < 81; i++) {
    if (sudokuString[i] === '0') {
      arrOfCells.push('');
    } else {
      arrOfCells.push(sudokuString[i]);
    }
  }

  const arrOfLines = chunk(arrOfCells, 9);

  for (let i = 0; i < 9; i++) {
    const line = [];

    for (let j = 0; j < 9; j++) {
      line.push({
        value: arrOfLines[i][j],
        editable: arrOfLines[i][j] === '',
        i,
        j
      });
    }

    sudokuArray.push(line);
  }

  return sudokuArray;
}

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const chooseRandomSudoku = arr => arr[getRandomNumber(0, arr.length - 1)];

export const getSudokuString = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return chooseRandomSudoku(EASY);
    case 'medium':
      return chooseRandomSudoku(MEDIUM);
    case 'hard':
      return chooseRandomSudoku(HARD);
  }
}
