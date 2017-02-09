import {
  NEW_GAME,
  CHANGE_CELL_VALUE,
  CLEAR_TABLE,
  SHOW_DIALOG,
  CLOSE_DIALOG
} from '../actions/GameActions';

const initialState = {
  difficulty: '',
  board: [],
  showDialog: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, state, {
        difficulty: action.difficulty,
        board: action.board
      });

    case CHANGE_CELL_VALUE:
      return Object.assign({}, state, { board: action.newBoard });

    case CLEAR_TABLE:
      return Object.assign({}, state, { board: action.newBoard });

    case SHOW_DIALOG:
      return Object.assign({}, state, { showDialog: action.flag });

    case CLOSE_DIALOG:
      return Object.assign({}, state, { showDialog: action.flag });

    default:
      return state;
  }
}
