import { useEffect } from 'react';
import { RcbEvent } from '../constants/RcbEvent';
import { RcbBaseEvent } from '../types/internal/events/RcbBaseEvent';
import { useBotId } from './useBotId';

/**
 * External custom hook for listening to RcbEvents with built-in filter by bot id.
 *
 * @param eventName name of the rcb event to listen to
 * @param handler callback that receives the event with `detail` containing botId and path info
 */
export const useOnRcbEvent = (
  eventName: RcbEvent,
  handler: (event: RcbBaseEvent) => void,
) => {
  const { getBotId } = useBotId();

  useEffect(() => {
    const listener = (event: Event) => {
      const customEvent = event as CustomEvent<any>;
      // ensures chatbots only respond to their own events
      if (customEvent.detail?.botId !== getBotId()) {
        return;
      }
      handler(customEvent as RcbBaseEvent);
    };

    window.addEventListener(eventName as string, listener);
    return () => {
      window.removeEventListener(eventName as string, listener);
    };
  }, [getBotId, eventName, handler]);
};
