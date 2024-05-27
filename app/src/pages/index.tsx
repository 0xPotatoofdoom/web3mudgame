import Head from 'next/head';
import React, { useState } from 'react';
import { History } from '../components/history';
import { Input } from '../components/input';
import { useShell } from '../utils/shellProvider';
import { useTheme } from '../utils/themeProvider';
import config from '../../config.json';
import Modal from '../components/modal';
interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const { history } = useShell();
  const { theme } = useTheme();

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    console.log(history);
    if (
      history.length > 1 &&
      history[history.length - 1].command === 'register'
    ) {
      setShowRegisterModal(true);
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history, inputRef]);

  const onClickAnywhere = () => {
    if (!showRegisterModal) inputRef.current.focus();
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      <Head>
        <title>Web3MUD.Game | Home</title>
      </Head>

      <div
        className="overflow-hidden h-full rounded"
        style={{
          borderColor: theme.yellow,
          padding: config.border ? 16 : 8,
          borderWidth: config.border ? 2 : 0,
        }}
        onClick={onClickAnywhere}
      >
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />
          {showRegisterModal ? (
            <Modal onClose={handleCloseModal} />
          ) : (
            <Input inputRef={inputRef} containerRef={containerRef} />
          )}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
