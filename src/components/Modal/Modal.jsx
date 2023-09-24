import { useEffect } from 'react';
import { Backdrop, ModalWrap, ButtonExit, Svg } from './Modal.styled';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, openModal, width }) => {
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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWrap width={width}>
        <ButtonExit type="button" onClick={() => openModal()}>
          <Svg>
            <use href={sprite + '#close'} />
          </Svg>
        </ButtonExit>

        {children}
      </ModalWrap>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;

// =================for testing============================================================================

//  const [openModal, setOpenModal] = useState(false)

//     <>
//         <button onClick={() => setOpenModal(true)}>Open</button>
//         {openModal && <Modal children={<YOU MODAL COMPONENT/>} openModal={setOpenModal} />}
//     </>
