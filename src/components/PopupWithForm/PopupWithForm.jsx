import { useEffect, useRef } from 'react';
import closeButton from '../../assets/images/icon-close-popup.svg';

export default function PopupWithForm({ onClosePopup, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClosePopup();
      }
    }

    if (children) {
      document.addEventListener('keydown', handleEscClose);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.body.style.overflow = 'unset';
    };
  }, [children, onClosePopup]);

  function handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      onClosePopup();
    }
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (children) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [children]);

  return (
    <dialog
      ref={dialogRef}
      className='popup-with-form'
      onClick={handleOverlayClick}
    >
      <div className='popup-with-form__content'>
        <button
          className='popup-with-form__close-button'
          onClick={onClosePopup}
        >
          <img
            className='popup-with-form__icon-close-button'
            src={closeButton}
            alt='Botón para cerrar el popup'
          />
        </button>
        {children}
      </div>
    </dialog>
  );
}
