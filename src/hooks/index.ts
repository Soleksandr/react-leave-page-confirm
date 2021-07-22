import { Blocker } from 'history';
import React from 'react';
import { History } from '../types';

interface IUsePageLeaveBlockerHookArguments {
  isActive: boolean;
  history: History;
  onHistoryChange: (event: Parameters<Blocker>[0], isBlocked: boolean) => void;
}

export const usePageLeaveBlocker = ({
  isActive,
  history,
  onHistoryChange,
}: IUsePageLeaveBlockerHookArguments): [() => void] => {
  const [location, setLocation] = React.useState('');

  const unblockRef = React.useRef<() => void>();

  const onBeforeUnload = React.useCallback(
    (e: BeforeUnloadEvent) => {
      if (!isActive) {
        return;
      }

      e.preventDefault();
      return (e.returnValue = 'Changes you made may not be saved.');
    },
    [isActive],
  );

  const unblock = () => {
    window.removeEventListener('beforeunload', onBeforeUnload);

    unblockRef.current && unblockRef.current();

    history.push(location);
  };

  React.useEffect(() => {
    unblockRef.current = history.block(({ location, ...rest }) => {
      onHistoryChange({ location, ...rest }, isActive);

      if (!isActive) {
        unblockRef.current && unblockRef.current();
        return;
      }

      setLocation(location.pathname);

      return false;
    });

    return () => {
      unblockRef.current && unblockRef.current();
    };
  }, [isActive]);

  React.useEffect(() => {
    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  }, [onBeforeUnload]);

  return [unblock];
};
