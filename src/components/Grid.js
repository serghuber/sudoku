import React, { Component } from 'react';
import Cell from './Cell';

const Grid = (props) => {
  return (
    <table className="sudoku-table">
      <tbody>
        {props.board.map(function(line, i) {
          return (
            <tr key={i}>
              {line.map(function(cell) {
                return <Cell board={props.board} cell={cell} key={cell.j} dispatch={props.dispatch} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Grid;
