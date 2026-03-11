import Register from '../Register/Register.jsx';

export default function Login({ popup, onOpenPopup, onClosePopup }) {
  const registerPopup = {
    children: (
      <Register
        popup={popup}
        onOpenPopup={onOpenPopup}
        onClosePopup={onClosePopup}
      />
    ),
  };
  return (
    <form className='login' id='login-form' noValidate>
      <fieldset className='login__content'>
        <legend className='login__title'>Iniciar sesión</legend>
        <label className='login__label' htmlFor='login-email'>
          Correo electrónico
        </label>
        <input
          id='login-email'
          className='login__input'
          type='email'
          placeholder='Introduce tu correo electrónico'
          required
          pattern='^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$'
        />
        <span className='login__span-error'>
          Dirección de correo electrónico no válida
        </span>
        <label className='login__label' htmlFor='login-password'>
          Contraseña
        </label>
        <input
          id='login-password'
          className='login__input'
          type='password'
          placeholder='Introduce tu contraseña'
          required
        ></input>
        <span className='login__span-error'></span>
        <button className='login__button' type='submit'>
          Iniciar sesión
        </button>
        <div className='login__switch'>
          <span className='login__switch-text'>o </span>
          <button
            type='button'
            className='login__switch-button'
            onClick={() => {
              onOpenPopup(registerPopup);
            }}
          >
            inscribirse
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
