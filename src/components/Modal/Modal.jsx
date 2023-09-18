import { useEffect } from 'react';
import { Backdrop, Modalka, ButtonExit, Svg } from './Modal.styled';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modalka>
        <ButtonExit type="button" onClick={() => openModal()}>
          <Svg>
            <use href={sprite + '#close'} />
          </Svg>
        </ButtonExit>

        {children}
      </Modalka>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;

// =================for testing============================================================================

//  const [openModal, setOpenModal] = useState(false)

//     <>
//         <p onClick={() => setOpenModal(true)}>Open</p>
//         {openModal && <Modal children={<YOU MODAL COMPONENT/>} openModal={setOpenModal} />}
//     </>
