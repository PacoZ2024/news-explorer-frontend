import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__content'>
        <Link className='header__logo' to='/'>
          News Explorer
        </Link>
        <div className='header__link-distributions'>
          <div className='header__link-container header__link-container-active'>
            <Link className='header__link' to='/'>
              Inicio
            </Link>
          </div>
          <div className='header__link-container header__link-container-disabled'>
            <Link className='header__link' to='/saved-news'>
              Artículos guardados
            </Link>
          </div>
          <button className='header__button'>Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
}
