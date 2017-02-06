import { getSudokuString } from './SudokuActions';
import { getSudokuArray } from './SudokuActions';

export const NEW_GAME = 'NEW_GAME',
             CHANGE_CELL_VALUE = 'CHANGE_CELL_VALUE',
             CLEAR_TABLE = 'CLEAR_TABLE',
             SHOW_DIALOG = 'SHOW_DIALOG',
             CLOSE_DIALOG = 'CLOSE_DIALOG';

export function startNewGame(difficulty) {
  const board = getSudokuArray(getSudokuString(difficulty));

  return { type: NEW_GAME, difficulty, board };
}

export function changeCellValue(i, j, value, board) {
  const newBoard = board.slice();

  newBoard[i][j].value = value;

  return { type: CHANGE_CELL_VALUE, newBoard };
}

export function clearTable(board) {
  const newBoard = board.slice();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (newBoard[i][j].editable == true) newBoard[i][j].value = '';
    }
  }

  return { type: CLEAR_TABLE, newBoard }
}

export function showDialog() {
  const bool = true;
  return { type: SHOW_DIALOG, bool };
}

export function closeDialog() {
  const bool = false;
  return { type: CLOSE_DIALOG, bool };
}

export function validation(array) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const value = array[i][j].value;

      if (!value) return false;

      for (let n = 0; n < 9; n++) {
        if (n != j && array[i][n].value == value) return false;
      }

      for (let m = 0; m < 9; m++) {
        if (m != i && array[m][j].value == value) return false;
      }

      const startX = Math.floor(i / 3) * 3;

      for (let x = startX; x < startX + 3; x++) {
        const startY = Math.floor(j / 3) * 3;
        for (let y = startY; y < startY + 3; y++) {
          if ((y != j || x != i) && array[x][y].value == value) return false;
        }
      }
    }
  }

  return true;

}
