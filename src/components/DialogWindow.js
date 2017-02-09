import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import { closeDialog } from '../actions/GameActions';

const DialogWindow = (props) => {
  const actions = [
    <FlatButton
      label="Ok"
      primary
      onTouchTap={() => props.dispatch(closeDialog())}
    />
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={() => props.dispatch(closeDialog())}
      contentStyle={{width: 310}}
      bodyStyle={{textAlign: 'center', paddingBottom: 0, fontSize: 18, color: 'black'}}
    >
      {props.message}
    </Dialog>
  );
}

export default DialogWindow;
