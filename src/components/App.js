import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import DialogWindow from './DialogWindow';
import TopBar from './TopBar';
import Grid from './Grid';
import {
  startNewGame,
  clearTable,
  validation,
  showDialog
} from '../actions/GameActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogMessage: ''
    }

    this.checkBtnClick = this.checkBtnClick.bind(this);
  }

  getChildContext() {
    return { muiTheme:
      getMuiTheme({
        fontFamily: 'Roboto, sans-serif',
        palette: {
          primary1Color: '#42a5f5',
          primary2Color: '#26a69a',
          primary3Color: 'rgba(0, 0, 0, 0.54)',
          accent1Color: '#ff4081',
          accent2Color: '#f5f5f5',
          accent3Color: '#9e9e9e',
          textColor: 'rgba(0, 0, 0, 0.87)',
          alternateTextColor: '#ffffff',
          canvasColor: '#ffffff',
          borderColor: '#e0e0e0',
          pickerHeaderColor: '#2196f3'
        }
      })
    };
  }

  checkBtnClick() {
    if (validation(this.props.board)) {
      this.setState({dialogMessage: 'Sudoku is solved. Congratulations!'});
      this.props.dispatch(showDialog());
    } else {
      this.setState({dialogMessage: 'Sudoku is not solved. Try again!'});
      this.props.dispatch(showDialog());
    }
  }

  render() {
    const { dispatch, difficulty, board, showDialog } = this.props;

    return (
      <div>
        <TopBar onTouchTap={() => dispatch(startNewGame(difficulty))} />
        <div className="game-container">
          <RaisedButton className="difficulty-button" label={difficulty} />
          <RaisedButton
            className="clear-button"
            label="CLEAR"
            secondary
            onClick={() => dispatch(clearTable(board))}
          />
          <Grid board={board} dispatch={dispatch} />
          <RaisedButton
            className="check-button"
            label="CHECK"
            primary
            onClick={this.checkBtnClick}
          />
        </div>
        <DialogWindow dispatch={dispatch} message={this.state.dialogMessage} open={showDialog} />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { difficulty, board, showDialog } = state;

  return { difficulty, board, showDialog };
}

export default connect(mapStateToProps)(App);
