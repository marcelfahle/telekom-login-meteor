import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class ConfirmationDialog extends React.Component {
  constructor( props ) {
    super( props );
  }


  render() {

    const info = this.props.info;
    const filename = (info.meta && info.meta.name)? info.meta.name : info.name;


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.cancel}
      />,
      <FlatButton
        label="Confirm"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.onConfirm}
      />
    ];

    return (
      <Dialog
        title={`Delete "${filename}"?`}
        actions={actions}
        modal={false}
        open={true}
        onRequestClose={this.props.cancel}
      >

      </Dialog>
    )
  }
}
