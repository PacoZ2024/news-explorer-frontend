import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import iconLogoutDark from '../../assets/images/icon-exit-dark.svg';
import iconLogoutLight from '../../assets/images/icon-exit-light.svg';

export default function Header() {
  const { userName, isLoggedIn } = useContext(CurrentUserContext);
  const location = useLocation();
  return (
    <header
      className={`header ${location.pathname === '/saved-news' ? 'header__light' : ''}`}
    >
      <div className='header__content'>
        <Link className='header__logo' to='/'>
          News Explorer
        </Link>
        <div className='header__link-distributions'>
          <div
            className={`header__link-container ${location.pathname === '/' ? 'header__link-container-active' : ''}`}
          >
            <Link className='header__link' to='/'>
              Inicio
            </Link>
          </div>
          {isLoggedIn && (
            <div
              className={`header__link-container ${location.pathname === '/saved-news' ? 'header__link-container-active-light' : ''}`}
            >
              <Link className='header__link' to='/saved-news'>
                Artículos guardados
              </Link>
            </div>
          )}
          {isLoggedIn ? (
            <button
              className={`header__button ${location.pathname === '/saved-news' ? 'header__button-light' : ''}`}
            >
              <span className='header__button-text'>{userName}</span>
              <div className='header__icon-container'>
                {location.pathname === '/saved-news' ? (
                  <img src={iconLogoutDark} alt='Icono de cierre de sesión' />
                ) : (
                  <img src={iconLogoutLight} alt='Icono de cierre de sesión' />
                )}
              </div>
            </button>
          ) : (
            <button className='header__button'>Iniciar sesión</button>
          )}
        </div>
      </div>
    </header>
  );
}
