import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Report from '@material-ui/icons/Report';

const useStyles = makeStyles((theme) => ({
  defaultMessage: {
    display: 'flex',
    alignItems: 'center',
  },
  warningIcon: {
    color: theme.palette.warning.main,
    marginRight: 4,
  },
}));

export const DefaultMessage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.defaultMessage}>
      <Report className={classes.warningIcon} />
      Changes you made may not be saved.
    </div>
  );
};
