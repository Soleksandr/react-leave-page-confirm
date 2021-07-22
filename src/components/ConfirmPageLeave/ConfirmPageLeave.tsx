import React from 'react';

import { History } from '../../types';
import { IPromptProps, Prompt } from '../Prompt';
import { usePageLeaveBlocker } from '../../hooks';
import { DefaultMessage } from '../DefaultMessage';
import { Blocker } from 'history';

interface IConfirmPageLeave extends Partial<Pick<IPromptProps, 'message' | 'title'>> {
  isActive: boolean;
  history: History;
}

export const ConfirmPageLeave: React.FC<IConfirmPageLeave> = ({
  isActive,
  title,
  message,
  history,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onHistoryChange = React.useCallback(
    (_: Parameters<Blocker>[0], isBlocked: boolean) => {
      if (isBlocked) {
        setIsOpen(true);
      }
    },
    [setIsOpen],
  );

  const [unblock] = usePageLeaveBlocker({ isActive, history, onHistoryChange });

  const onOk = () => {
    unblock();

    history.push(location);

    setIsOpen(false);
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  return (
    <Prompt
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      title={title ? title : 'Confirm action'}
      message={message ? message : <DefaultMessage />}
    />
  );
};
