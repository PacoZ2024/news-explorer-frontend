import Login from '../Login/Login.jsx';

export default function Register({ popup, onOpenPopup, onClosePopup }) {
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
    <form className='register' id='register-form' noValidate>
      <fieldset className='register__content'>
        <legend className='register__title'>Inscribirse</legend>
        <label className='register__label' htmlFor='register-email'>
          Correo electrónico
        </label>
        <input
          id='register-email'
          className='register__input'
          type='email'
          placeholder='Introduce tu correo electrónico'
          required
          pattern='^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$'
        />
        <span className='register__span-error'>
          Dirección de correo electrónico no válida
        </span>
        <label className='register__label' htmlFor='register-password'>
          Contraseña
        </label>
        <input
          id='register-password'
          className='register__input'
          type='password'
          placeholder='Introduce tu contraseña'
          required
        ></input>
        <span className='register__span-error'></span>
        <label className='register__label' htmlFor='register-username'>
          Nombre de usuario
        </label>
        <input
          id='register-username'
          className='register__input'
          type='text'
          placeholder='Introduce tu nombre de usuario'
          required
        ></input>
        <span className='register__span-error'></span>
        <button className='register__button' type='submit'>
          Inscribirse
        </button>
        <div className='register__switch'>
          <span className='register__switch-text'>o </span>
          <button
            type='button'
            className='register__switch-button'
            onClick={() => {
              onOpenPopup(loginPopup);
            }}
          >
            iniciar sesión
          </button>
        </div>
      </fieldset>
      {popup && (
        <PopupWithForm onClosePopup={onClosePopup}>
          {popup.children}
        </PopupWithForm>
      )}
    </form>
  );
}
