import { NEW_GAME } from '../actions/GameActions';
import { CHANGE_CELL_VALUE } from '../actions/GameActions';
import { CLEAR_TABLE } from '../actions/GameActions';
import { SHOW_DIALOG } from '../actions/GameActions';
import { CLOSE_DIALOG } from '../actions/GameActions';

const initialState = {
  difficulty: '',
  board: [],
  showDialog: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, state, { difficulty: action.difficulty, board: action.board });
    case CHANGE_CELL_VALUE:
      return Object.assign({}, state, { board: action.newBoard });
    case CLEAR_TABLE:
      return Object.assign({}, state, { board: action.newBoard });
    case SHOW_DIALOG:
      return Object.assign({}, state, { showDialog: action.bool });
    case CLOSE_DIALOG:
      return Object.assign({}, state, { showDialog: action.bool });
    default:
      return state;
  }
}
