import React from 'react';
import { AppBar, IconMenu, IconButton, MenuItem } from 'material-ui';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const TopBar = (props) => {
  const iconMenu = (
    <IconMenu iconButtonElement={<IconButton><NavigationMenu color="#fafafa" /></IconButton>} >
      <MenuItem primaryText="Easy" onTouchTap={props.onTouchTap.bind(this, 'easy')} />
      <MenuItem primaryText="Medium" onTouchTap={props.onTouchTap.bind(this, 'medium')} />
      <MenuItem primaryText="Hard" onTouchTap={props.onTouchTap.bind(this, 'hard')} />
    </IconMenu>
  );

  return (<AppBar iconElementLeft={iconMenu} title={<span style={{cursor: 'pointer'}}>Sudoku</span>} />);
};

export default TopBar;
