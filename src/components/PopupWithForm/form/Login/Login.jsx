import { useState } from 'react';
import Register from '../Register/Register.jsx';
import {
  validateEmail,
  validatePassword,
} from '../../../../utils/validation.js';

export default function Login({ popup, onOpenPopup, onClosePopup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [emailMessageError, setEmailMessageError] = useState('');
  const [passwordMessageError, setPasswordMessageError] = useState('');
  const registerPopup = {
    children: (
      <Register
        popup={popup}
        onOpenPopup={onOpenPopup}
        onClosePopup={onClosePopup}
      />
    ),
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
    validateEmail(event.target.value)
      ? setEmailMessageError('')
      : setEmailMessageError('Email inválido');
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setIsPasswordValid(validatePassword(event.target.value));
    validatePassword(event.target.value)
      ? setPasswordMessageError('')
      : setPasswordMessageError(
          'La contraseña debe tener entre 8 y 16 caracteres con al menos un dígito, una minúscula y una mayúscula.',
        );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className='login' id='login-form' noValidate>
      <fieldset className='login__content'>
        <legend className='login__title'>Iniciar sesión</legend>
        <label className='login__label' htmlFor='login-email'>
          Correo electrónico
        </label>
        <input
          className='login__input'
          id='login-email'
          name='email'
          type='email'
          autoComplete='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Introduce tu correo electrónico'
          required
        />
        <span className='login__span-error'>{emailMessageError}</span>
        <label className='login__label' htmlFor='login-password'>
          Contraseña
        </label>
        <input
          className='login__input'
          id='login-password'
          name='password'
          type='password'
          minLength='8'
          maxLength='16'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Introduce tu contraseña'
          required
        />
        <span className='login__span-error'>{passwordMessageError}</span>
        <button
          className='login__button'
          type='submit'
          onClick={handleSubmit}
          disabled={!(isEmailValid && isPasswordValid)}
        >
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
