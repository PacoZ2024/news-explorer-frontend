import closeButton from '../../assets/images/icon-close-popup.svg';

export default function PopupWithForm({ onClosePopup, children }) {
  return (
    <div className='popup-with-form'>
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
