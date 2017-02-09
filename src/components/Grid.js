import React, { Component } from 'react';
import Cell from './Cell';

const Grid = props => (
  <table className="sudoku-table">
    <tbody>
      {props.board.map((line, i) => (
        <tr key={i}>
          {line.map((cell) => <Cell board={props.board} cell={cell} key={cell.j} dispatch={props.dispatch} />)}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Grid;
