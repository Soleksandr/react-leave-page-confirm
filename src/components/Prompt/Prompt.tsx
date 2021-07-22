import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export interface IPromptProps {
  title: string;
  onOk: () => void;
  onCancel: () => void;
  message: JSX.Element | string;
  open?: boolean;
}

export const Prompt = ({
  open = true,
  title,
  message,
  onOk,
  onCancel,
}: IPromptProps): JSX.Element => {
  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>{message}</DialogContent>
        <DialogActions>
          <Button onClick={onCancel}>cancel</Button>
          <Button onClick={onOk}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
