import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

class DeleteContactModal extends React.Component {
  
  render() {
    const { open, onClose, onSubmit, contact } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Contact</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Are you sure you want to delete {contact.firstName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => onSubmit(this.props.contact)} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteContactModal;
