import { useEffect } from 'react';
import closeButton from '../../assets/images/icon-close-popup.svg';

export default function PopupWithForm({ onClosePopup, children }) {
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

  return (
    <div className='popup-with-form' onClick={handleOverlayClick}>
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
    </div>
  );
}
