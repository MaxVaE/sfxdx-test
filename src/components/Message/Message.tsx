import { useEffect } from 'react';

type MessageProps = {
  message: string;
  changeMessage: (value: string) => unknown;
};

function Message({ message, changeMessage }: MessageProps) {
  useEffect(() => {
    setTimeout(() => {
      changeMessage('');
    }, 5000);
  }, [message]);

  if (!message) {
    return null;
  }

  return (
    <div className="message">
      {message}
    </div>
  );
}

export default Message;
