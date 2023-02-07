import { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return (
    <div
      className='fixed top-0 left-0 w-full h-screen z-[100] bg-black/75 backdrop-blur-sm'
      onClick={props.onCloseForm}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className='flex justify-center items-center h-screen overflow-y-scroll
'
    >
      <div className='fixed top-0 max-w-full  lg:w-[70%] p-4 z-[1000] ease-out duration-300'>
        {props.children}
      </div>
    </div>
  );
};

const Modal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onCloseForm={props.onClose} />,
          document.getElementById('modal-root')
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById('modal-root')
        )}
      </Fragment>
    );
  } else {
    return null;
  }
};
export default Modal;
