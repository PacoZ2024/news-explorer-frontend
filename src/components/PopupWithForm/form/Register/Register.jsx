import { useState } from 'react';
import Login from '../Login/Login.jsx';
import {
  validateEmail,
  validatePassword,
} from '../../../../utils/validation.js';

export default function Register({ popup, onOpenPopup, onClosePopup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [emailMessageError, setEmailMessageError] = useState('');
  const [passwordMessageError, setPasswordMessageError] = useState('');
  const [usernameMessageError, setUsernameMessageError] = useState('');
  const loginPopup = {
    children: (
      <Login
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

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    setIsUsernameValid(event.target.validity.valid);
    event.target.validity.valid
      ? setUsernameMessageError('')
      : setUsernameMessageError(
          'El nombre de usuario debe tener entre 2 y 20 caracteres de longitud',
        );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

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
          name='email'
          type='email'
          autoComplete='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Introduce tu correo electrónico'
          required
        />
        <span className='register__span-error'>{emailMessageError}</span>
        <label className='register__label' htmlFor='register-password'>
          Contraseña
        </label>
        <input
          id='register-password'
          className='register__input'
          name='password'
          type='password'
          minLength='8'
          maxLength='16'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Introduce tu contraseña'
          required
        />
        <span className='register__span-error'>{passwordMessageError}</span>
        <label className='register__label' htmlFor='register-username'>
          Nombre de usuario
        </label>
        <input
          id='register-username'
          className='register__input'
          name='username'
          type='text'
          autoComplete='username'
          minLength='2'
          maxLength='20'
          value={username}
          onChange={handleUsernameChange}
          placeholder='Introduce tu nombre de usuario'
          required
        />
        <span className='register__span-error'>{usernameMessageError}</span>
        <button
          className='register__button'
          type='submit'
          onClick={handleSubmit}
          disabled={!(isEmailValid && isPasswordValid && isUsernameValid)}
        >
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
