import { useEffect } from 'react';

export const Modal = ({ children, openModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        openModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      openModal();
    }
  };

  return <div onClick={handleBackdropClick}>{children}</div>;
};

export default Modal;
