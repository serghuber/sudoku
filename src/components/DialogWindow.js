import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { closeDialog } from '../actions/GameActions';

class DialogWindow extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.dispatch(closeDialog());
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return(
      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
        contentStyle={{width: 310}}
        bodyStyle={{textAlign: 'center', paddingBottom: 0, fontSize: 18, color: 'black'}}
      >
        {this.props.message}
      </Dialog>
    );
  }
}

export default DialogWindow;
