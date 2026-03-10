import { Link } from 'react-router-dom';

export default function Register() {
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
        <p className='register__paragraph'>
          o <Link className='register__link'>iniciar sesión</Link>
        </p>
      </fieldset>
    </form>
  );
}
