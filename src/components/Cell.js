import React, { Component } from 'react';
import { changeCellValue } from '../actions/GameActions';

const pallet = {
	'0': '#90CAF9',
	'30': '#1DE9B6',
	'60': '#FFAB91',
	'3': '#D1C4E9',
	'33': '#FFF59D',
	'63': '#A5D6A7',
	'6': '#80CBC4',
	'36': '#F48FB1',
	'66': '#81D4FA'
};

const getBoxColor = (row, col) => {
	let rowGroup = row - (row % 3);
	let colGroup = (col - (col % 3)) * 10;

	return pallet[rowGroup + colGroup];
};

class Cell extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  shouldComponentUpdate(newProps) {
    let oldCell = this.props.cell;
    let newCell = newProps.cell;
    return (
      oldCell.value !== newCell.value ||
      oldCell.editable !== newCell.editable
    );
  }

  onChange(event) {
    event.preventDefault();
    let cell = this.props.cell;
    if (!cell.editable) {
      return;
    }
    let newValue = event.target.value;
    if (newValue !== '' && !/^[1-9]$/.test(newValue)) {
      event.target.value = cell.value;
      return;
    }

    this.props.dispatch(changeCellValue(cell.i, cell.j, newValue === '' ? '' : parseInt(newValue), this.props.board));
  }

  onClick(event) {
    event.preventDefault();

    if (this.props.cell.editable) {
      event.target.select();
    } else {
      event.target.blur();
    }
  }

  render() {
    let cell = this.props.cell;

    return (
      <td className={cell.editable ? 'editable' : 'not-editable'}>
        <input
          value={cell.value}
          onClick={this.onClick}
          onChange={this.onChange}
          style={{backgroundColor: getBoxColor(cell.i, cell.j)}}
        />
      </td>
    );
  }
}

export default Cell;
