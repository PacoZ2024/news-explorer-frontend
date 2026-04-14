import PopupWithForm from '../PopupWithForm/PopupWithForm.jsx';
import Login from '../PopupWithForm/form/Login/Login.jsx';

export default function InfoTooltip({ popup, onOpenPopup, onClosePopup }) {
  const loginPopup = {
    children: (
      <Login
        popup={popup}
        onOpenPopup={onOpenPopup}
        onClosePopup={onClosePopup}
      />
    ),
  };
  return (
    <div className='info-tooltip__switch'>
      <p className='info-tooltip__switch-text'>
        ¡El registro se ha completado con éxito!
      </p>
      <button
        type='button'
        className='info-tooltip__switch-button'
        onClick={() => {
          onOpenPopup(loginPopup);
        }}
      >
        iniciar sesión
      </button>
      {popup && (
        <PopupWithForm onClosePopup={onClosePopup}>
          {popup.children}
        </PopupWithForm>
      )}
    </div>
  );
}
